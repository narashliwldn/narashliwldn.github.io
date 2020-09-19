import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class JadwalItem extends HTMLElement {

   constructor() {
       super();
   }

   set jadwal(jadwal) {
       this._jadwal = jadwal;
       this.render();
   }

   render() {
       this.innerHTML =
       `
       <style>
        ${css}
       </style>
       <div class="card">
       <div class="card-content">
       <span class="card-title"></span>
       <table>
       <thead>
          <tr>
            <th>Jadwal</th>
            <th>Senin</th>
            <th>Selasa</th>
            <th>Rabu</th>
            <th>Kamis</th>
            <th>Jum'at</th>
            <th>Sabtu</th>
          </tr>
       </thead>
        <tbody>
          <tr>
            <td>${this._jadwal.Jadwal}</td>
            <td>${this._jadwal.senin}</td>
            <td>${this._jadwal.selasa}</td>
            <td>${this._jadwal.rabu}</td>
            <td>${this._jadwal.kamis}</td>
            <td>${this._jadwal.jumat}</td>
            <td>${this._jadwal.sabtu}</td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
      `;
   }
}

customElements.define("jadwal-item", JadwalItem);
