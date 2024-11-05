import express from "express";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { createFetchRequest } from "./request-handler";
import { routes } from "./routes";
import * as ReactDOMServer from "react-dom/server";

const app = express();

let handler = createStaticHandler(routes);

app.get("*", async (req, res) => {
  let fetchRequest = createFetchRequest(req, res);
  let context = await handler.query(fetchRequest);

  let router = createStaticRouter(handler.dataRoutes, context);
  let html = ReactDOMServer.renderToString(
    <StaticRouterProvider router={router} context={context} />,
  );

  res.send("<!DOCTYPE html>" + html);
});

const listener = app.listen(3000, () => {
  let { port } = listener.address();
  console.log(`Listening on port ${port}`);
});
