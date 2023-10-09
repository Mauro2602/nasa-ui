import axios from 'axios';

export const sendPostInformation = async ({ url, body }) => {
  const apiUrl = `http://localhost:8080/${url}`;

  try {
    const response = await axios.post(apiUrl, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('Insertion response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error response:', error);
    throw new Error('Error en la petición: ' + error.message);
  }
};

export const sendGetRequest = async ({ url, params }) => {
  const apiUrl = `http://localhost:8080/${url}`;

  try {
    const response = await axios.get(apiUrl, {
      params: params,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error en la petición GET: ' + error.message);
  }
};