const api_url = process.env.REACT_APP_API_URL;
// const api_key = process.env.REACT_APP_API_KEY;
const data_url = process.env.REACT_APP_DATA_URL;
export class ServerApi {
  post = async (url:string, data:string) => {
    return fetch(api_url + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((er) => {
        throw new Error(er);
      });
  };
  get = async (url:string, param = '') => {
    return fetch(data_url + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((er) => {
        throw new Error(er);
      });
  };
}