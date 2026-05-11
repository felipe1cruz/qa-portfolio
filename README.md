# 🎭 QA Portfolio — Felipe Cruz

![Playwright Tests](https://github.com/felipe1cruz/qa-portfolio/actions/workflows/playwright.yml/badge.svg)

Portfólio de testes automatizados desenvolvido com **Playwright** e **JavaScript**, 
com pipeline CI/CD integrado ao GitHub Actions.

---

## 👨‍💻 Sobre o projeto

Este repositório reúne testes end-to-end e de API desenvolvidos como parte da 
minha evolução como QA Engineer, complementando minha experiência com testes 
manuais na Lar Cooperativa Agroindustrial.

**Stack:** Playwright · JavaScript · GitHub Actions · Node.js

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

---

## 🚀 Como executar

**Pré-requisitos:** Node.js instalado

```bash
# Instalar dependências
npm install

# Instalar browsers do Playwright
npx playwright install

# Rodar todos os testes
npx playwright test

# Rodar um arquivo específico
npx playwright test login.spec.js

# Ver relatório visual
npx playwright show-report
```

---

## ⚙️ CI/CD

Os testes rodam automaticamente no **GitHub Actions** a cada push na branch `main`.

---

## 📫 Contato

**Felipe Cruz** — QA Engineer  
[LinkedIn](https://www.linkedin.com/in/dacruzfelipe) · 
[GitHub](https://github.com/felipe1cruz)