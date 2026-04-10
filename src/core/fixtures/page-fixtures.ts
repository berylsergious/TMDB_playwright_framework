import { test as base } from '@playwright/test';
import { LoginPage } from '../../ui/pages/loginPage';
import { MyProfilePage } from "../../ui/pages/MyProfilePage";

type PageFixtures = {
  loginPage: LoginPage;
  myProfilePage: MyProfilePage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  myProfilePage: async ({ page }, use) => {
    await use(new MyProfilePage(page));
  }
});