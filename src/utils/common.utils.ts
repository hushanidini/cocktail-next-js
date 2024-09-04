import axios, { AxiosError } from 'axios';

// handle errors
export const handleAxiosError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error(`Error: ${axiosError.response.status} - ${axiosError.response.statusText}`);
      console.error('Response data:', axiosError.response.data);
    } else if (axiosError.request) {
      console.error('No response received:', axiosError.request);
    } else {
      console.error('Error in request setup:', axiosError.message);
    }
  } else {
    console.error('Non-Axios error:', error);
  }
};
