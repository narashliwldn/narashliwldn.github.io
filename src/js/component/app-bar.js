import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
// import "materialize-social/materialize-social.css";
// import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

class AppBar extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      ${css}
    </style>
    <ul id="nav-mobile" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="./src/images/batik.jpg">
          </div>
          <a href="#"><img class="circle" src="./src/images/UGM.png"></a>
          <a href="#"><span class="white-text name">Dzaky M Raffy</span></a>
          <a href="#"><span class="white-text name">Kevin Agusto Sastramiharja</span></a>
          <a href="#"><span class="white-text name">Nahdia Rani Sholihah</span></a>
        </div>
      </li>
      <li><a href="https://github.com/KevinAS28/Ekoji-Challenge-2">Link untuk data</a></li>
      <li><a href="https://github.com/narashliwldn/">Link untuk front-end</a></li>
    </ul>

    <div class="navbar-fixed">
      <nav class="red darken-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Ekoji Academy</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Link Source Code</a></li>
          </ul>

          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
      </nav>

      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="./src/images/batik.jpg">
            </div>
            <a href="#"><img class="circle" src="./src/images/UGM.png"></a>
            <a href="#"><span class="white-text name">Dzaky M Raffy</span></a>
            <a href="#"><span class="white-text name">Kevin Agusto Sastramiharja</span></a>
            <a href="#"><span class="white-text name">Nahdia Rani Sholihah</span></a>
          </div>
        </li>
        <li><a href="https://github.com/KevinAS28/Ekoji-Challenge-2">Link untuk data</a></li>
        <li><a href="https://github.com/narashliwldn/">Link untuk front-end</a></li>
      </ul>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
