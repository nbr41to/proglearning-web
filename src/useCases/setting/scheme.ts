import { z } from 'zod';

export const profileNameSchema = z
  .string()
  .min(1, { message: '名前を入力してください' });

export const githubIdSchema = z.string().refine(
  async (value) => {
    /* GitHub IDの存在CHECK */
    if (value) {
      const response = await fetch(`https://api.github.com/users/${value}`);

      return response.status !== 404;
    }

    return true;
  },
  { message: 'そのGitHub IDは存在しません' }
);

export const zennIdSchema = z.string().refine(
  async (value) => {
    /* Zenn IDの存在CHECK */
    if (value) {
      const response = await fetch(`/api/zenn/users?id=${value}`);

      return response.status !== 404;
    }

    return true;
  },
  { message: 'そのZenn IDは存在しません' }
);

export const introductionSchema = z.string().min(1, {
  message: '自己紹介を入力してください',
});
