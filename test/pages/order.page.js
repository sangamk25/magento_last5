class ordersPage {
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

  get myOrdersPageNavigationButton() {
    return $("#block-collapsible-nav > ul > li:nth-child(2) > a");
  }

  get TextOfOrdersPage() {
    return $(
      "#maincontent > div.columns > div.column.main > div.page-title-wrapper"
    );
  }
  get MessageOfUserorder() {
    return $(
      "#maincontent > div.columns > div.column.main > div.message.info.empty"
    );
  }

  async navigateToUserAccount() {
    await this.dropDownButton.click();
    await this.MyAccountPage.click();
  }
  async GotoMyOrdersPage(Text, msg) {
    await this.myOrdersPageNavigationButton.click();

    await expect(this.TextOfOrdersPage).toHaveTextContaining(Text);
    await expect(this.MessageOfUserorder).toHaveTextContaining(msg);
  }
}
module.exports = new ordersPage();
