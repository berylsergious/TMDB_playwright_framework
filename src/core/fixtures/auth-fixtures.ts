// auth-fixture.ts
import { test as pomTest } from './page-fixtures';

type AuthFixtures = {
  authenticatedUser: void;
};

export const test = pomTest.extend<AuthFixtures>({
  authenticatedUser: async ({ loginPage }, use) => {
    await loginPage.navigate();
    await loginPage.login(process.env.TMDB_USERNAME!,process.env.TMDB_PASSWORD!);
    await use();
  }
});