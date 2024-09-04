'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS, ROUTES } from '@/constant';
import Link from 'next/link';
import { Menu, CupSoda, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import LabelWithIcon from '@/components/molecule/LabelWithIcon';
import { useFavorites } from '@/FavoritesContext';

export default function MainLayoutHeader() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const { favorites } = useFavorites();
  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <header className='sticky top-0 flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6 bg-gray-900 text-white '>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 '>
        <Link href='/' className='flex items-center gap-2 text-lg font-semibold md:text-base'>
          <CupSoda className='w-10 h-10' />
        </Link>

        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className='text-foreground transition-colors hover:text-foreground text-lg'
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link href='/' className='flex items-center gap-2 text-lg font-semibold'>
              <CupSoda className='w-10 h-10' />
            </Link>
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  'p-2 md:px-4 md:py-2 text-lg md:text-base hover:bg-gray-700 rounded text-white'
                  // pathname.pathname === item.url ? 'bg-gray-700' : ''
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <form className='ml-auto flex-1 sm:flex-initial'></form>

        <Link href={ROUTES.FAVORITE_PAGE}>
          <Button variant='secondary' size='icon' className='rounded-full text-lg'>
            <LabelWithIcon
              Icon={Heart}
              label={String(favorites?.length)}
              bgColorClass={`w-7 h-7`}
              textColorClass={`font-bold text-lg ${favorites?.length > 0 ? 'text-red-500' : 'text-white'}`}
            />
          </Button>
        </Link>
      </div>
    </header>
  );
}
