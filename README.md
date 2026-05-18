# 🎭 QA Portfolio — Felipe Cruz
![Playwright Tests](https://github.com/felipe1cruz/qa-portfolio/actions/workflows/playwright.yml/badge.svg)
<a href="https://github.com/felipe1cruz/qa-portfolio"><img src="https://img.shields.io/github/last-commit/felipe1cruz/qa-portfolio?color=blue&label=%C3%BAltimo%20commit" alt="último commit"></a> <a href="https://github.com/felipe1cruz/qa-portfolio"><img src="https://img.shields.io/github/repo-size/felipe1cruz/qa-portfolio?color=blue&label=tamanho" alt="tamanho"></a> <a href="https://github.com/felipe1cruz/qa-portfolio"><img src="https://img.shields.io/github/languages/top/felipe1cruz/qa-portfolio?color=blue&label=linguagem" alt="linguagem"></a> <a href="https://playwright.dev"><img src="https://img.shields.io/badge/Made%20with-Playwright-45ba4b?logo=Playwright&logoColor=white" alt="Playwright"></a> <a href="https://github.com/felipe1cruz/qa-portfolio"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs welcome"></a> <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js"></a>

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

Os testes são instrumentados com Allure Report, gerando relatórios visuais com
steps detalhados, severidade, feature, e anexos de resposta de API.Acesse o relatório ao vivo: https://felipe1cruz.github.io/qa-portfolio/

```bash
# Rodar testes e abrir relatório completo
npm run allure:report

# Ou separadamente
npm run test                # roda os testes
npm run allure:generate     # gera o HTML
npm run allure:open         # abre no browser
```

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

# Ver relatório visual do Playwright
npx playwright show-report

# Ver relatório Allure
npm run allure:report
```

---

## ⚙️ CI/CD

Os testes rodam automaticamente no **GitHub Actions** a cada push na branch `main`.

Características do pipeline:
Instalação de dependências e cache de browsers
Execução de testes em paralelo (Chromium e Firefox no CI)
Geração automática do Allure Report
Deploy do relatório para GitHub Pages
Compatibilidade: 3 browsers (Chromium, Firefox e WebKit)Ver histórico de workflows: https://github.com/felipe1cruz/qa-portfolio/actions

---


## 📫 Contato

**Felipe Cruz** — QA Engineer
[LinkedIn](https://www.linkedin.com/in/dacruzfelipe) · [GitHub](https://github.com/felipe1cruz)
