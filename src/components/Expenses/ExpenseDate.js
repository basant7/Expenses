import './ExpenseDate.css'

function ExpenseDate(props) {
  // const EnpenseDate = new Date(2021, 2, 28);
  // const ExpenseTitle = "Car Insurence";
  // const ExpensePrice = 500;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
