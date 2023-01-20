import type { ChatPostMessageArguments } from '@slack/web-api';

import { slack } from '@/server/slack/client';

/**
 * chat.postMessage
 * https://api.slack.com/methods/chat.postMessage
 */
export const sendMessage = async (params: ChatPostMessageArguments) => {
  const response = await slack.chat.postMessage(params);

  return response;
};
