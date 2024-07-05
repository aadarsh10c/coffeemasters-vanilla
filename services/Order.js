import API from "./API.js";

export async function loadItems() {
  const data = await API.fetchMenu();
  app.store.menu = data;
}
