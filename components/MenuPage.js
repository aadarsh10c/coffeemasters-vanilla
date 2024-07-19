// custome element
export class MenuPage extends HTMLElement {
  constructor() {
    super();
    //attach a shodow dom
    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("menu-page-template");
    //clone the template, as we cannot inject it directly into DOM "unusable"
    const content = template.content.cloneNode(true);
    //now inject it into your custome component
    this.root.appendChild(content);
  }

  //Below is valid js ,incase u didn;t attach shadow dom
  //   connectedCallback() {
  //     const template = document.getElementById("menu-page-template");
  //     //clone the template, as we cannot inject it directly into DOM "unusable"
  //     const content = template.content.cloneNode(true);
  //     //now inject it into your custome component
  //     this.appendChild(content);
  //   }
}

customElements.define("menu-page", MenuPage);
