import { test, expect } from '@playwright/test';

test('login com sucesso', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForLoadState('networkidle');

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit'}).click();

    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});

test('login com usuário inválido', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#username').fill('usuario_errado');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();

    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});

test('login com senha inválida', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.waitForLoadState('networkidle');

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('senha_errada');
  await page.locator('#submit').click();

  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});

