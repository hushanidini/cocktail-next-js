import { handleAxiosError } from '@/utils';
import { Cocktail, APIResponse } from '@/types/types';
import apiClient from '@/configs/axios-Instance.config';

// Fetch 5 random cocktails
const fetchRandomCocktail = async (): Promise<Cocktail> => {
  const response = await apiClient.get<APIResponse<Cocktail>>(`/random.php`);
  return response.data.drinks[0];
};

export const getRandomCocktails = async (count: number): Promise<Cocktail[]> => {
  const promises = Array.from({ length: count }, () => fetchRandomCocktail());
  try {
    const cocktails = await Promise.all(promises);
    return cocktails;
  } catch (error) {
    handleAxiosError(error);
    return [];
  }
};

// Search for cocktails
export const searchCocktails = async (query: string): Promise<Cocktail[]> => {
  try {
    const response = await apiClient.get<APIResponse<Cocktail>>(`/search.php?s=${query}`);
    return response.data.drinks;
  } catch (error) {
    handleAxiosError(error);
    return [];
  }
};
