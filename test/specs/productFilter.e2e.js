const ProductFilter = require("../pages/ProductFilter.page");

const productFilterTest = () => {
  it("Navigate to the Product Filter Page ", async () => {
    await ProductFilter.GoToMensProduct();
    await ProductFilter.SizeOfProduct("S");
    await ProductFilter.setStyleOfProduct("insulated");
    await ProductFilter.setPriceOfProduct();
    await browser.pause(5000);
  });
};
module.exports = productFilterTest;
