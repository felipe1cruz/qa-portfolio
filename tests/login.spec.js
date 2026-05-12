import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('login com sucesso', async ({ page }) => {
  await loginPage.login('student', 'Password123');

  await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});

test('login com usuário inválido', async () => {
  await loginPage.login('usuario_errado', 'Password123');

  await expect(await loginPage.getErrorMessage()).toHaveText('Your username is invalid!');
});

test('login com senha inválida', async () => {
  await loginPage.login('student', 'senha_errada');

  await expect(await loginPage.getErrorMessage()).toHaveText('Your password is invalid!');
});