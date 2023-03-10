import type { NextPage } from 'next';

import { ColorGoogleIcon } from '@/components/common/icons';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import { Button } from '@mantine/core';

const LoginPage: NextPage = () => {
  const { signInWithGoogle, developLogin } = useSupabaseAuth();

  return (
    <div className="flex h-[800px] items-center justify-center">
      <div className="flex h-80 w-80 flex-col items-center justify-center gap-8 rounded border border-solid p-8">
        <Button
          className="border-blue-700 bg-white text-blue-700 shadow"
          variant="outline"
          fullWidth
          leftIcon={<ColorGoogleIcon size={20} />}
          onClick={() => signInWithGoogle()}
        >
          Googleアカウントでログイン
        </Button>
        {process.env.NODE_ENV === 'development' && (
          <Button fullWidth onClick={() => developLogin()}>
            Development login
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
