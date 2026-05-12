export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.submit = page.locator('#submit');
    this.errorMessage = page.locator('#error');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
}