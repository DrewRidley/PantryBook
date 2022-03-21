export const moneyFormatter = new Intl.NumberFormat("eu-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "narrowSymbol",
});
