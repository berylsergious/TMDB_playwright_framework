import {Page, test, expect} from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';

test.describe('Login Flow', () => {
    
    
    test('login should work with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.login('user@example.com', 'secret');
    await expect(page).toHaveURL('/dashboard');
});

test('login should fail with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.login('user@example.com', 'wrongpassword');
    await expect(page).toHaveURL('/login');
});


});