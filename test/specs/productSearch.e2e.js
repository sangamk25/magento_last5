const ProductSearchPage = require("../pages/productSearch.page");
const productTest = () => {
  it("Search a product verify and Test its functionalities", async () => {
    await ProductSearchPage.product("T-shirt for men");

    await ProductSearchPage.SizeOfProduct("M");
    await ProductSearchPage.color("Green");
    await ProductSearchPage.AddProductToCart();

   
    await browser.pause(5000);
  });
};

module.exports = productTest;
