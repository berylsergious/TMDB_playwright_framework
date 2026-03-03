import { mergeTests } from '@playwright/test';
import { test as pageFixtures } from './page-fixtures';
import { test as authFixtures } from './auth-fixtures';


export const test = mergeTests(
  pageFixtures,
  authFixtures
);

export { expect } from '@playwright/test';