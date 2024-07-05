import Store from "./services/Store.js";
import { loadItems } from "./services/Order.js";

//need a varaile to store Coffe store data that is accesible all around the application
window.app = {};
app.store = Store;

addEventListener("DOMContentLoaded", () => {
  loadItems();
});
