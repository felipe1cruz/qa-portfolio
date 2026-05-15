import { test, expect } from '@playwright/test';
import { description, label, severity, step } from 'allure-js-commons';
import { LoginPage } from '../pages/LoginPage.js';

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('login com sucesso', async ({ page }) => {
  description('Usuário com credenciais válidas acessa o dashboard e vê mensagem de boas-vindas.');
  label('feature', 'Autenticação');
  severity('critical');

  await step('Realizar login com credenciais válidas', async () => {
    await loginPage.login('student', 'Password123');
  });

  await step('Validar mensagem de boas-vindas', async () => {
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
  });
});

test('login com usuário inválido', async () => {
  description('Login com usuário inexistente deve exibir mensagem de erro.');
  label('feature', 'Autenticação');
  severity('normal');

  await step('Tentar login com usuário inválido', async () => {
    await loginPage.login('usuario_errado', 'Password123');
  });

  await step('Validar mensagem de erro', async () => {
    await expect(await loginPage.getErrorMessage()).toHaveText('Your username is invalid!');
  });
});

test('login com senha inválida', async () => {
  description('Login com senha incorreta deve exibir mensagem de erro.');
  label('feature', 'Autenticação');
  severity('normal');

  await step('Tentar login com senha inválida', async () => {
    await loginPage.login('student', 'senha_errada');
  });

  await step('Validar mensagem de erro', async () => {
    await expect(await loginPage.getErrorMessage()).toHaveText('Your password is invalid!');
  });
});