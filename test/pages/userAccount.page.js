class UserAccountPage {
  get dropDownButton() {
    return $(
      "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button"
    );
  }

  get MyAccountPage() {
    return $(
      "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li:nth-child(1) > a"
    );
  }
  get UserAccountMessage() {
    return $(
      "#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1 > span"
    );
  }

  get UserContactInformation() {
    return $(
      "#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div.block-content > div > strong > span"
    );
  }

  get manageAddressButton() {
    return $(
      "#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-title > a > span"
    );
  }
  get firstNameOfUser() {
    return $("#firstname");
  }
  get lastNameOfUser() {
    return $("#lastname");
  }
  get PhonenumberOfUser() {
    return $("#telephone");
  }
  get StreetOfUser() {
    return $("#street_1");
  }
  get CityOfUser() {
    return $("#city");
  }

  get stateOfUseraddress() {
    return $("#region_id");
  }
  get PostalCodeOfUser() {
    return $("#zip");
  }
  get CountryOfUserAddress() {
    return $("#country");
  }

  async navigateToUserAccount() {
    await this.dropDownButton.click();
    await this.MyAccountPage.click();
  }

  async checkUserAccountMessage(msg) {
    await expect(this.UserAccountMessage).toHaveTextContaining(msg);
  }

  async checkUserContactInfotmationIsCorrect(UserAccountInformation) {
    await expect(this.UserContactInformation).toHaveTextContaining(
      UserAccountInformation
    );
  }
  async ManageAddressAndContactOfUser(
    firstName,
    lastName,
    MobileNumber,
    street,
    city,
    postalCode
  ) {
    await this.manageAddressButton.click();
    await this.firstNameOfUser.setValue(firstName);
    await this.lastNameOfUser.setValue(lastName);
    await this.PhonenumberOfUser.setValue(MobileNumber);
    await this.StreetOfUser.setValue(street);
    await this.CityOfUser.setValue(city);
    await this.PostalCodeOfUser.setValue(postalCode);
  }

  async manageStateOfUserAddress(stateOfUser) {
    //await this.stateOfUseraddress.click();
    await this.stateOfUseraddress.selectByVisibleText(stateOfUser);

  }

  async manageCountryOfUserAddress(country) {

    await this.CountryOfUserAddress.selectByVisibleText(country);
  }
}
module.exports = new UserAccountPage();
