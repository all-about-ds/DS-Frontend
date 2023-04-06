import { createProxyMiddleware } from 'http-proxy-middleware';
import { REACT_APP_BASE_URL } from 'shared/config';

export default (app: any) => {
  app.use(
    '/stomp/chat',
    createProxyMiddleware({ target: 'http://localhost:3000', ws: true })
  );
};
