# 🎭 QA Portfolio — Felipe Cruz
![Playwright Tests](https://github.com/felipe1cruz/qa-portfolio/actions/workflows/playwright.yml/badge.svg)

Portfólio de testes automatizados desenvolvido com **Playwright** e **JavaScript**,
com pipeline CI/CD integrado ao GitHub Actions e relatórios visuais com Allure Report.

---

## 👨‍💻 Sobre o projeto

Este repositório reúne testes end-to-end e de API desenvolvidos como parte da
minha evolução como QA Engineer, complementando minha experiência com testes
manuais na Lar Cooperativa Agroindustrial.

**Stack:** Playwright · JavaScript · Allure Report · GitHub Actions · Node.js

---

## 🧪 Testes implementados

### Login — `tests/login.spec.js`
Suíte de testes para fluxo de autenticação, cobrindo os principais cenários:

| Cenário | Resultado esperado |
|---|---|
| Login com credenciais válidas | Mensagem de sucesso exibida |
| Login com usuário inválido | Mensagem de erro exibida |
| Login com senha inválida | Mensagem de erro exibida |

✅ Executados nos browsers: **Chromium · Firefox · WebKit**

### API — `tests/api.spec.js`
Testes de API REST contra a JSONPlaceholder API, cobrindo os principais métodos HTTP:

| Cenário | Método | Resultado esperado |
|---|---|---|
| Buscar usuário existente | GET | Status 200 + dados corretos |
| Criar novo post | POST | Status 201 + ID gerado |
| Recurso não encontrado | GET | Status 404 |
| Listar todos os posts | GET | Status 200 + lista não vazia |

---

## 📊 Relatórios com Allure

Os testes são instrumentados com [Allure Report](https://allurereport.org), gerando
relatórios visuais com steps detalhados, severidade, feature, e anexos de resposta de API.

```bash
