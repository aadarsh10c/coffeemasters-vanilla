const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/": {
        pageElement = document.createElement("h1");
        pageElement.innerText = "Menu";
        break;
      }
      case "/order": {
        pageElement = document.createElement("h1");
        pageElement.innerText = "Order";
        break;
      }
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent("Details");
          pageElement.dataset.productId = route.substring(
            route.lastIndexOf("-") + 1
          );
        }
        break;
    }
    if (pageElement) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
    }
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
