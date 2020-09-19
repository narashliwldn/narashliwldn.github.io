import DataSource from '../data/data-source.js';
import '../component/jadwal-list.js';


const main =  () => {
    const jadwalListElement = document.querySelector("jadwal-list");
    const getAllJadwal = async () => {
      try {
        const result = await DataSource.getAllJadwal();
        renderResult(result);
      }
      catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = (results) => {
      jadwalListElement.jadwals = results;
    };

    const fallbackResult = (message) => {
        jadwalListElement.renderError(message);
    };

    getAllJadwal();

};

export default main;
