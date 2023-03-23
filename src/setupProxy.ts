import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app: any) => {
  app.use(
    '/ws',
    createProxyMiddleware({ target: 'http://localhost:3000', ws: true })
  );
};
