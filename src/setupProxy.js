import { createProxyMiddleware } from "http-proxy-middleware";

const setupProxy = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};

export default setupProxy;
