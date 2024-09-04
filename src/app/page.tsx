'use client';
import { getRandomCocktails, searchCocktails } from '@/services/cocktails.service';
import { useState, useEffect } from 'react';
import { Cocktail } from '@/types/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFavorites } from '@/FavoritesContext';

export default function Home() {
  const [query, setQuery] = useState('');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const { addToFavorites, favorites } = useFavorites();

  const refreshCocktails = async () => {
    const newCocktails = await getRandomCocktails(5);
    setCocktails(newCocktails);
    setQuery('');
  };
  const handleSearch = async () => {
    const results = await searchCocktails(query);
    setCocktails(results);
  };

  useEffect(() => {
    refreshCocktails();
  }, []);

  return (
    <div className='flex flex-col'>
      {/* search cocktails */}
      <div className='flex items-center gap-4 pb-4'>
        <div className='items-center hidden gap-2 md:ml-auto md:flex'>
          <Input
            type='search'
            placeholder='Search products...'
            className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleSearch} size='sm' variant='outline'>
            Search
          </Button>
        </div>
      </div>
      {/* random cocktails */}
      <div className='flex items-center gap-4 pb-4'>
        <h1 className='flex-1 text-xl font-semibold tracking-tight shrink-0 whitespace-nowrap sm:grow-0'>
          Random Cocktails
        </h1>

        <div className='items-center hidden gap-2 md:ml-auto md:flex'>
          <Button onClick={refreshCocktails} size='sm' variant='outline'>
            Refresh
          </Button>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {cocktails?.map((cocktail, index) => {
          const isFavorite = favorites.some((fav) => fav?.idDrink === cocktail?.idDrink);
          return (
            <Card key={`key-${index}-${cocktail?.idDrink}`} className='mb-4'>
              <CardHeader>
                <CardTitle>{cocktail?.strDrink}</CardTitle>
                <CardDescription>{cocktail?.strCategory}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={cocktail?.strDrinkThumb}
                  alt={cocktail?.strDrink}
                  className='w-full h-auto rounded-md'
                />
              </CardContent>
              <CardFooter>
                {isFavorite ? null : (
                  <Button onClick={() => addToFavorites(cocktail)} size='sm' variant='outline'>
                    Add to Favorites
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
