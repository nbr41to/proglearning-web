import type {
  NotionBlockObjectResponse,
  NotionPageObjectResponse,
} from './notion';

export type Lesson = {
  id: string;
  title: string;
  contents: {
    id: string;
    title: string;
  }[];
};

export type LessonContent = {
  page: NotionPageObjectResponse;
  children: NotionBlockObjectResponse[];
};
