import Store from "./services/Store.js";
import { loadItems } from "./services/Order.js";
import Router from "./services/Router.js";

//Link my Web Componenets
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};

//need a varaile to store Coffe store data that is accesible all around the application
app.store = Store;

//gives accs=ess to router through ou the application
app.router = Router;

addEventListener("DOMContentLoaded", () => {
  loadItems();
  app.router.init();
});
