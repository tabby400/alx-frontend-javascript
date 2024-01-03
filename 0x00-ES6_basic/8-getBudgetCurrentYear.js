// returns a budget object for the current year withincome, GDP, and per capita
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
