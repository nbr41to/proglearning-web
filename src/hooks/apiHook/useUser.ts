import type { User } from '@prisma/client';

import { getUser } from '@/utils/supabase/database';
import { useEffect, useState } from 'react';

export const useUser = (uid?: string) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    if (!uid) return;

    (async () => {
      const user = await getUser(uid);
      setUser(user);
    })();
  }, [uid]);

  return user;
};
