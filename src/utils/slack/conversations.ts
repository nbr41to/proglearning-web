import { slack } from '@/utils/slack/client';

/**
 * チャンネルリストの取得
 */
export const getPublicChannelList = async () => {
  const response = slack.conversations.list({
    types: 'public_channel,private_channel',
  });

  return response;
};
