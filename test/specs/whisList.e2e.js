const WhisListPage = require("../pages/whisList.page");

const whisListCart = () => {
  it("WhisList Page Test", async () => {
    await WhisListPage.whisList();
    await WhisListPage.checkForMsg("My Wish List");

    await WhisListPage.shareWhisList("abc@gmail.com")
    await browser.pause(5000);
  });
};
module.exports = whisListCart;
