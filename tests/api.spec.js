import { test, expect } from '@playwright/test';
import { description, label, severity, step, attachment } from 'allure-js-commons';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET - buscar usuário existente', async ({ request }) => {
  description('Busca um usuário pelo ID e valida nome e ID na resposta.');
  label('feature', 'API de usuários');
  severity('critical');

  const response = await step('Fazer GET /users/1', async () => {
    return await request.get(`${BASE_URL}/users/1`);
  });

  await step('Validar status 200', async () => {
    expect(response.status()).toBe(200);
  });

  await step('Validar corpo da resposta', async () => {
    const body = await response.json();
    await attachment('resposta', JSON.stringify(body, null, 2), 'application/json');
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');
  });
});

test('POST - criar novo post', async ({ request }) => {
  description('Cria um novo post e valida que o ID foi gerado pelo servidor.');
  label('feature', 'API de posts');
  severity('critical');

  const payload = {
    title: 'QA Portfolio Test',
    body: 'Testando criação de post via Playwright',
    userId: 1
  };

  const response = await step('Fazer POST /posts', async () => {
    return await request.post(`${BASE_URL}/posts`, { data: payload });
  });

  await step('Validar status 201', async () => {
    expect(response.status()).toBe(201);
  });

  await step('Validar corpo da resposta', async () => {
    const body = await response.json();
    await attachment('resposta', JSON.stringify(body, null, 2), 'application/json');
    expect(body.id).toBeDefined();
    expect(body.title).toBe('QA Portfolio Test');
  });
});

test('GET - recurso não encontrado', async ({ request }) => {
  description('Busca um usuário inexistente e valida que a API retorna 404.');
  label('feature', 'API de usuários');
  severity('normal');

  const response = await step('Fazer GET /users/99999', async () => {
    return await request.get(`${BASE_URL}/users/99999`);
  });

  await step('Validar status 404', async () => {
    expect(response.status()).toBe(404);
  });
});

test('GET - listar todos os posts', async ({ request }) => {
  description('Lista todos os posts e valida que a resposta não está vazia.');
  label('feature', 'API de posts');
  severity('normal');

  const response = await step('Fazer GET /posts', async () => {
    return await request.get(`${BASE_URL}/posts`);
  });

  await step('Validar status 200', async () => {
    expect(response.status()).toBe(200);
  });

  await step('Validar lista não vazia', async () => {
    const body = await response.json();
    await attachment('total de posts', String(body.length), 'text/plain');
    expect(body.length).toBeGreaterThan(0);
  });
});
