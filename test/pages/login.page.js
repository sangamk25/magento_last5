class LoginPage {
  get Email() {
    return $("#email");
  }
  get Password() {
    return $("#pass");
  }

  get signInButton() {
    return $("#send2");
  }

  async login(email, password) {
    await this.Email.setValue(email);
    await this.Password.setValue(password);
    await this.signInButton.click();
  }
}
module.exports = new LoginPage();
