
import axios from "axios";
const URL = 'https://us-central1-growth-properties.cloudfunctions.net/api/api/v1'

export const api = {
  getRooms: async () => {
    const res = await axios.get(`${URL}/rooms`);
    return res.data;
  },
  getLocation: async () => {
    const res = await axios.get(`${URL}/location`);
    return res.data;
  },
  getGallery: async () => {
    const res = await axios.get(`${URL}/gallery`);
    return res.data;
  },
  getContacts: async () => {
    const res = await axios.get(`${URL}/contacts`);
    return res.data;
  },
  getContacts: async () => {
    const res = await axios.get(`${URL}/property`);
    return res.data;
  },
};
