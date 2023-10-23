export class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginBtn = '//button[normalize-space()="Log in"]';
    }

    async gotoLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}
