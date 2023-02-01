import type { NextPage } from 'next';

import { ColorGoogleIcon } from '@/common/icons';
import { signInWithGoogle } from '@/utils/supabase/auth';
import { Button } from '@mantine/core';

const LoginPage: NextPage = () => {
  return (
    <div className="flex h-[800px] items-center justify-center">
      <div className="flex h-80 w-80 items-center justify-center rounded border border-solid p-8">
        <Button
          className="border-blue-700 bg-white text-blue-700 shadow"
          variant="outline"
          fullWidth
          leftIcon={<ColorGoogleIcon size={20} />}
          onClick={() => signInWithGoogle()}
        >
          Googleアカウントでログイン
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
