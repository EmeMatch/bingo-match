import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/login",
  app: () => System.import("@vue-mf/login"),
  activeWhen: '/login',
  customProps: { authToken: 'd83jD63UdZ6RS6f70D0' },
});

start();
