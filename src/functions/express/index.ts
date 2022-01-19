export const app = {
  handler: `src/functions/express/handler.api`,
  events: [
    {
      http: {
        method: 'GET',
        path: '/test',
      },
    }, 
    {
      http: {
        method: 'GET',
        path: '/test2',
      },
    },
    {
      http: {
        method: 'POST',
        path: '/test3',
      },
    },
  ],
};
