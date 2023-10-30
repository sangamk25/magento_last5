class ProductSearch {
  get SearchBar() {
    return $("#search");
  }

  get Submit() {
    return $("#search_mini_form > div.actions > button");
  }

  get SelectedProduct() {
    return $(
      "#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(2) > div > div > strong > a"
    );
  }
  get XsSizeOfProduct() {
    return $("#option-label-size-143-item-166");
  }
  get smallSizeOfProduct() {
    return $("#option-label-size-143-item-167");
  }
  get MediumSizeOfProduct() {
    return $("#option-label-size-143-item-168");
  }
  get LargeSizeOfProduct() {
    return $("#option-label-size-143-item-169");
  }
  get XLSizeOfProduct() {
    return $("#option-label-size-143-item-170");
  }

  get grayColorOfProduct() {
    return $("#option-label-color-93-item-52");
  }
  get greenColorOfProduct() {
    return $("#option-label-color-93-item-53");
  }
  get orangeColorOfProduct() {
    return $("#option-label-color-93-item-56");
  }

  get AddToCartButton() {
    return $("#product-addtocart-button > span");
  }

  async product(Product) {
    await this.SearchBar.click();
    await this.SearchBar.setValue(Product);
    await this.Submit.click();
    await this.SelectedProduct.click();
  }

  async SizeOfProduct(Productsize) {
    if (Productsize === "S") {
      await this.smallSizeOfProduct.click();
    } else if (Productsize === "Xs") {
      await this.XsSizeOfProduct.click();
    } else if (Productsize === "M") {
      await this.MediumSizeOfProduct.click();
    } else if (Productsize === "L") {
      await this.LargeSizeOfProduct.click();
    } else {
      await this.XLSizeOfProduct.click();
    }
  }

  async color(Color) {
    if (Color === "Gray") {
      await this.grayColorOfProduct.click();
    }
    if (Color === "Red") {
      await this.orangeColorOfProduct.click();
    }
    if (Color === "Green") {
      await this.greenColorOfProduct.click();
    }
  }

  async AddProductToCart() {
    await this.AddToCartButton.click();
  }
}

module.exports = new ProductSearch();
