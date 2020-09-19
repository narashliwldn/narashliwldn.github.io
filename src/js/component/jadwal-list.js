import './jadwal-item.js';

class JadwalList extends HTMLElement {

   set jadwals(jadwals) {
       this._jadwals = jadwals;
       this.render();
   }

   render() {
       this.innerHTML = "";
       this._jadwals.forEach(jadwal => {
           const jadwalItemElement = document.createElement("jadwal-item");
           jadwalItemElement.jadwal = jadwal;
           this.appendChild(jadwalItemElement);
       });
   }

   renderError(message) {
       this.innerHTML = "";
       this.innerHTML +=
       `
       <h2 class="placeholder">${message}</h2>
       `;
   }

}

customElements.define("jadwal-list", JadwalList);
