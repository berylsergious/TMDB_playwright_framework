import { test as base } from '@playwright/test';
import { LoginPage } from '../../ui/pages/LoginPage';
import { MyProfilePage } from "../../ui/pages/MyProfilePage";
import { WatchlistPage } from '../../ui/pages/Watchlist';
import { SearchResultPage } from '../../ui/pages/SearchResultPage';
import { MovieDetailsPage } from '../../ui/pages/MovieDetails';

type PageFixtures = {
  loginPage: LoginPage;
  myProfilePage: MyProfilePage;
  watchlistPage: WatchlistPage;
  searchResultPage: SearchResultPage;
  movieDetailsPage: MovieDetailsPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  myProfilePage: async ({ page }, use) => {
    await use(new MyProfilePage(page));
  },
  watchlistPage: async ({ page }, use) => {
    await use(new WatchlistPage(page));
  },
  searchResultPage: async ({ page }, use) => {
    await use(new SearchResultPage(page));
  },
movieDetailsPage: async ({ page }, use) => {
    await use(new MovieDetailsPage(page));
  }
});