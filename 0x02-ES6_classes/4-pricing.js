import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount should be number');
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency should be instance of class Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount should be number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency should be instance of class Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (
      !(typeof amount === 'number') ||
      !(typeof conversionRate === 'number')
    ) {
      throw new TypeError('Amount and ConversionRate should be numbers');
    } else {
      return amount * conversionRate;
    }
  }
}
