import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

test ('GET - buscar usuário existente', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');

});

test ('POST - criar novo post', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`, {
        data: {
            title: 'QA Portfolio Test',
            body: 'Testando criação de ost via Playwright',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.id).toBeDefined();
    expect(body.title).toBe('QA Portfolio Test');
  
});

test('GET - recurso não encontrado', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/99999`);

  expect(response.status()).toBe(404);
});

test('GET - listar todos os posts', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/posts`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});


