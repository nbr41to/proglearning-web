import axios from 'axios';

/* Slackの通知用のチャンネルにメッセージを投稿する */
export const sendToSlackChannel = async (content: string) =>
  axios.post('/api/slack/messages', {
    content,
  });
