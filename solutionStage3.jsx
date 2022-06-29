const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input class="submit" type="submit" width="200" value="Submit"></input>
    </label>
  );
};



const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (newTotal >= 0) {
      setTotalState(newTotal);
    }
    else {
      alert('Negative Account Balance');
    }
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    const userSelection = event.target.value;
    if (userSelection === "Deposit"){
      setIsDeposit(true);
    }
    else {
      setIsDeposit(false);
    }
    
  };

  return (
    <form class="amountForm" onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <div>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
      <option id="deposit-selection" value="Deposit">Deposit</option>
      <option id="cashback-selection" value="Withdraw">Withdraw</option>
      </select>

       </div>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
