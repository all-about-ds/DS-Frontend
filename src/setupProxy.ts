import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app: any) => {
  app.use(
    '/ws',
    createProxyMiddleware({ target: 'http://localhost:3000', ws: true })
  );
};
