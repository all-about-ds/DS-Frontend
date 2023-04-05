import { createProxyMiddleware } from 'http-proxy-middleware';
import { REACT_APP_BASE_URL } from 'shared/config';

export default (app: any) => {
  app.use(
    '/ws',
    createProxyMiddleware({ target: REACT_APP_BASE_URL, ws: true })
  );
};
