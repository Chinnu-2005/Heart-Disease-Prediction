import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const predictHeartDisease = async (patientData) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/predict`, patientData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Prediction failed');
  }
};