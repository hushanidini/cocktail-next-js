export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}
export type SubHeadingProps = {
  label?: string;
};

export interface APIResponse<T> {
  drinks: T[];
}
