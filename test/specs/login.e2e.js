const LoginPage = require("../pages/login.page");
const userAcc = require("../specs/userAccount.e2e");
const productTest = require("../specs/productSearch.e2e");
const whisListCart = require("../specs/whisList.e2e");
const productFilterTest = require("../specs/productFilter.e2e");
const OrdersPageNavigation = require("../specs/ordersPage.e2e");

describe("Automate Magento Website ", () => {
  // user login
  it(" Login100: Navigate inside the Magneto Website and Login ", async () => {
    await browser.url("https://magento.softwaretestingboard.com/");

    await $(".authorization-link").click();
    await LoginPage.login("sangamk@testvagrant.com", "Magneto@25");

    await browser.pause(5000);
  });
  userAcc();
  productTest();
  whisListCart();
  productFilterTest();
  OrdersPageNavigation();
 
});
