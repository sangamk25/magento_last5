const OrdersPage = require("../pages/order.page");

const OrdersPageNavigation = () => {
  it("order101:Navigete to the Orders Page and Test Each Element", async () => {
    await OrdersPage.navigateToUserAccount();
    await OrdersPage.GotoMyOrdersPage(
      "My Orders",
      "You have placed no orders."
    );
   
    await browser.pause(5000);
  });
};
module.exports = OrdersPageNavigation;
