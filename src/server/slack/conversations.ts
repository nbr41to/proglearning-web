import { slack } from '@/server/slack/client';

/**
 * 公開チャンネルリストを取得
 */
export const getPublicChannelList = async () => {
  const response = slack.conversations.list({
    types: 'public_channel',
  });

  return response;
};

/**
 * チャンネルリストをすべて取得
 */
export const getChannelList = async () => {
  const response = slack.conversations.list({
    types: 'public_channel,private_channel',
  });

  return response;
};
