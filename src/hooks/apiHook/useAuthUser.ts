import type { User } from '@supabase/supabase-js';

import { getAuthUser } from '@/utils/supabase/auth';
import { useEffect, useState } from 'react';

export const useAuthUser = () => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    (async () => {
      const user = await getAuthUser();
      setUser(user);
    })();
  }, []);

  return user;
};
