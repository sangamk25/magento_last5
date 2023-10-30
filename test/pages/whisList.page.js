class WhisListPage {
  get whisListButton() {
    return $(
      "#maincontent > div.columns > div > div.product-info-main > div.product-social-links > div > a.action.towishlist > span"
    );
  }

  get CheckForMsg() {
    return $(
      "#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1 > span"
    );
  }

  get shareWhisListButton (){
    return $(
      "#wishlist-view-form > div.actions-toolbar > div.primary > button.action.share > span"
    );
  }

  get whislistsharingInformationOfEmail (){
    return $("#email_address");
  }

  async whisList() {
    await this.whisListButton.click();
    await browser.pause(5000);
  }
  async checkForMsg(msg) {
    await expect(this.CheckForMsg).toHaveTextContaining(msg);
  }
  async shareWhisList(Email){
    await this.shareWhisListButton.click();

    await this.whislistsharingInformationOfEmail.setValue(Email);
  }
}
module.exports = new WhisListPage();
