const UserAccountPage = require("../pages/userAccount.page");
const userAcc = () => {
  it("User Account Page Test", async () => {
    await UserAccountPage.navigateToUserAccount();
    await browser.pause(2000);
    await UserAccountPage.checkUserAccountMessage("My Account");
    await UserAccountPage.checkUserContactInfotmationIsCorrect(
      "Contact Information"
    );

    await UserAccountPage.ManageAddressAndContactOfUser(
      "SANGAM",
      "KUMAR",
      "8115684727",
      "LIC COLONY",
      "BANGLORE","274305"
    );

    await UserAccountPage.manageStateOfUserAddress("Alaska");
    
    await UserAccountPage.manageCountryOfUserAddress("India");

    await browser.pause(5000);
  });
};

module.exports = userAcc;
