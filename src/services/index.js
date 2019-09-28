const testApiPath = 'https://zurich.kosyachniy.com/test/';

const testApi = {
  data() {
    return fetch(testApiPath);
  },
};

export const data = async (time, emoji) => {
  try {
    const response = await testApi.data();
    if (response.ok) {
      const responseJson = await response.json();
      console.log('TCL: getData -> responseJson', responseJson);
      return responseJson;
    }
    return [];
  } catch {
    return [];
  }
};
