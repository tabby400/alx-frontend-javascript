// Creates and returns a budget object with income, GDP, and per capita values.
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}
