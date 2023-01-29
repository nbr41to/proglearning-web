import axios from 'axios';

/* Slackの通知用のチャンネルにメッセージを投稿する */
export const sendSlackChannel = async (content: string) =>
  axios.post('/api/slack/messages', {
    content,
  });
