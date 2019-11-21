const isProd = process.env.REACT_APP_STAGE === 'production';

const urls = {
  ...(isProd ? {
    findPlaces: 'https://api.prod',
    findDevices: 'https://api.prod'
  } : {
    findPlaces: 'https://yzcgo.sse.codesandbox.io/places',
    findDevices: 'https://yzcgo.sse.codesandbox.io/devices'
  })
};

export const fetchDevices = () => {
  return fetch(urls.findDevices, 
    {
      mode: 'cors',
      method: "GET",
      headers: {
      "Accept": "application/json"
    }
  })
  .then(res=> res.json())
  .catch((err) => err);
};

export const fetchPlaces = () => {
  return fetch(urls.findPlaces)
    .catch((err) => err);
};