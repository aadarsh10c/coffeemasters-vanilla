import Store from "./services/Store.js";
import { loadItems } from "./services/Order.js";
import Router from "./services/Router.js";

//need a varaile to store Coffe store data that is accesible all around the application
window.app = {};
app.store = Store;
app.router = Router;

addEventListener("DOMContentLoaded", () => {
  loadItems();
  app.router.init();
});
