const config = {
  app: {
    message: 'I am currently out of the office. I will be returning Monday, May 2nd.', // The message you want to send to users
    timebox: {
      start: process.env.START, // start timestamp, or parsable date (see http://dygraphs.com/date-formats.html)
      end: process.env.END, // end timestmap, or parsable date (see http://dygraphs.com/date-formats.html)
    },
    reminder: 240, // minutes, Do not respond to the user for another 8 hours
    respond: {
      dm: true, // Respond to the user via DM
      channel: true, // respond in the channel to everyone
    },
  },
  slack: {
    token: process.env.SLACK_TOKEN, // get it from https://api.slack.com/web
    autoReconnect: true,
    autoMark: false, // Mark messages as read
  },
};

module.exports = config;
