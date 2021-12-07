import axios from "axios";

const getClient = () => {
  const options = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios.create(options);
};

export default {
  async get(url: string, conf = {}) {
    const response = await getClient()
      .get(url, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async delete(url: string, conf = {}) {
    const response = await getClient()
      .delete(url, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async head(url: string, conf = {}) {
    const response = await getClient()
      .head(url, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async options(url: string, conf = {}) {
    const response = await getClient()
      .options(url, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async post(url: string, data = {}, conf = {}) {
    const response = await getClient()
      .post(url, data, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async put(url: string, data = {}, conf = {}) {
    const response = await getClient()
      .put(url, data, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },

  async patch(url: string, data = {}, conf = {}) {
    const response = await getClient()
      .patch(url, data, conf)
      .catch(async (error) => {
        return await Promise.reject(error.response);
      });
    return await Promise.resolve(response);
  },
};
