const API_URL = 'https://api.netop.tk/api';

export const constants = {
  links: {
    api: API_URL,
    image_url: `${API_URL}/image`,
  },
};

export const useConstants = () => {
 
  return {
    links: {
      api: API_URL,
    },
  };
};
