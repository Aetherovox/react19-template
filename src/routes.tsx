import { json, useLoaderData } from "react-router-dom";
import App from "./App";

export const routes = [
  {
    path: "/",
    loader() {
      return json({ message: "Welcome to React Router!" });
    },
    Component() {
      let data = useLoaderData();
      return <h1>{data.message} </h1>;
    },
  },

  {
    path: "/about",
    loader() {
      return json({ message: "This is the about page" });
    },
    Component() {
      let data = useLoaderData();
      return <h1>{data.message} </h1>;
    },
  },

  {
    path: "/home",
    loader() {
      return json({ message: "This is the about page" });
    },
    Component() {
      return <App />;
    },
  },
];
