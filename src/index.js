import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
// Command: npm install react-router-dom, allows for routing inside the program and must be installed manually.
// Routing allows us to change whats visible on the screen with client-side javascript to give the illusion of different pages.
// Acutally, everything is handled on the index.html page.
import { BrowserRouter } from "react-router-dom";

// BrowserRouter is a component, and we wrap the tags around the App component.
ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
