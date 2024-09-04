# Cocktail App

This is a Next.js project that allows users to explore and search for cocktails using the [CocktailDB API](https://www.thecocktaildb.com/). Users can view random cocktails, search for specific cocktails, and manage a list of favorite cocktails with persistent storage using `localStorage`.

## Features

### 1. Home Page
- **View Random Cocktails**: When a user arrives on the home page, they can view 5 random cocktails.
- **Refresh Button**: Users can click the "Refresh" button to load another 5 random cocktails.
- **Cocktail Details**: Each cocktail card displays the cocktail's name, image, and category.
- **Search for Cocktails**: Users can search for cocktails by name.
- **Add to Favorites**: Search results display an "Add" button that allows users to add cocktails to their favorites 

### 2. Favorites
- **View Favorites**: Users can view a list of their favorite cocktails.
- **Remove from Favorites**: Each favorite cocktail card displays a "Remove" button, allowing users to remove it from the favorites list.
- **Persistent Storage**: The favorites list is stored in `localStorage` to ensure persistence across page reloads.

## Tech Stack

- **Next.js**: The React framework used for building the application.
- **TypeScript**: Ensures type safety and improves code maintainability.
- **Axios**: For making API requests to the CocktailDB API.
- **shadcn/ui**: For building a modern and responsive user interface.
- **React Testing Library**: For writing unit tests.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (recommended version: 16.x or higher).
- **npm**: The Node.js package manager (comes with Node.js).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hushanidini/cocktail-next-js.git
   cd cocktail-next-js

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
