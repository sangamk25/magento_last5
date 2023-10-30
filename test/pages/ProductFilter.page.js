class ProductFilter {
  get ProductForMenButton() {
    return $("#ui-id-5 > span:nth-child(2)");
  }

  get TopsForMen() {
    return $("#narrow-by-list2 > dd > ol > li:nth-child(1) > a");
  }

  get Category() {
    return $("#narrow-by-list > div:nth-child(1) > div.filter-options-title");
  }

  get jacketsForMen() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a"
    );
  }

  get sizeOfProduct() {
    return $("#narrow-by-list > div:nth-child(2) > div.filter-options-title");
  }

  get XsSizeOfProduct() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(1) > div"
    );
  }
  get smallSizeOfProduct() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(2) > div"
    );
  }
  get MediumSizeOfProduct() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(3) > div"
    );
  }
  get LargeSizeOfProduct() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(4) > div"
    );
  }
  get XLSizeOfProduct() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(5) > div"
    );
  }

  get PriceOfProductButton() {
    return $("#narrow-by-list > div:nth-child(3) > div.filter-options-title");
  }
  get StyleofProductButton() {
    return $("#narrow-by-list > div:nth-child(1) > div.filter-options-title");
  }

  get setStyleOfProductInsulated() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a"
    );
  }
  get setStyleOfProductLightweight() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(3) > a"
    );
  }
  get setStyleOfProductJacket() {
    return $(
      "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(2) > a"
    );
  }
  async GoToMensProduct() {
    await this.ProductForMenButton.click();

    await this.TopsForMen.click();
    await this.Category.click();
    await this.jacketsForMen.click();
    await this.sizeOfProduct.click();
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

  async setStyleOfProduct(setStyle) {
    await this.StyleofProductButton.click();
    if (setStyle === "insulated") {
      await this.setStyleOfProductInsulated.click();
    } else if (setStyle === "Lightweight") {
      await this.setStyleOfProductLightweight.click();
    } else {
      await this.setStyleOfProductJacket.click();
    }
  }

  async setPriceOfProduct() {
    await this.PriceOfProductButton.click();
  }
}
module.exports = new ProductFilter();
