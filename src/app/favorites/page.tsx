'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/FavoritesContext';
import SubHeading from '@/components/molecule/SubHeading';

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <>
      <section className='space-y-4 mb-10 pb-10 border-b border-b-slate-300'>
        <SubHeading label='Favorites' />
      </section>

      {/* Favorites cocktails */}
      {favorites.length > 0 ? (
        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-5'>
          {favorites.map(({ idDrink, strDrink, strCategory, strDrinkThumb }, index) => (
            <Card key={`key-${index}-${idDrink}`} className='mb-4'>
              <CardHeader>
                <CardTitle>{strDrink}</CardTitle>
                <CardDescription>{strCategory}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={strDrinkThumb} alt={strDrink} className='w-full h-auto rounded-md' />
              </CardContent>
              <CardFooter className='flex justify-center'>
                <Button onClick={() => removeFromFavorites(idDrink)} size='default' variant='outline' className='bg-red-600 text-white'>
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className='flex justify-center'>No favorite cocktails found.</p>
      )}
    </>
  );
}
