import axios from "axios";

const API_URL = "http://localhost:3001/api";

/**
 * Retourne l'inventaire de Colchide
 */
export const fetchRoyalAssets = async () => {
  return (await axios.get(`${API_URL}/royal-assets`)).data;
};

/**
 * Retourne les résultats de la coupe du monde de javelot
 */
export const fetchJavelinResults = async () => {
  return (await axios.get(`${API_URL}/javelin-world-cup`)).data;
};

/**
 * Retourne les membres de la famille royale
 */
export const fetchRoyalFamily = async () => {
  return (await axios.get(`${API_URL}/royal-family`)).data;
};

export const contactForm = async (firstname, email, message) => {
  return await axios.post(`${API_URL}/contact-us`, {
    firstname,
    email,
    message,
  });
};
