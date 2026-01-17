
export function getLast7DaysExpenses(expenses) {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  return expenses.filter((expense) => {
    return expense.date >= sevenDaysAgo && expense.date <= today;
  });
}
