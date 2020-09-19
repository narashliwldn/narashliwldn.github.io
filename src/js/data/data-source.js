class DataSource {

  static async getAllJadwal() {
    try {
      const response = await fetch(`/src/js/data/hasil.json`);
      const responseJson = await response.json();
      if (responseJson.hasil) {
        return Promise.resolve(responseJson.hasil);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    }
    catch (error) {
      return Promise.reject(error);
    }
    }
}

export default DataSource;
