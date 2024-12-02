import './index.css'

const MoneyDetails=(props)=>{
    const {balance,income,expenses}=props
    return(
        <div className="display-amount-container"> 
            <div className="balance-container">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className="img" />
                <div className="amount-container">
                    <p className="text">Your Balance</p>
                    <p className="amount">{balance}</p>
                    
                </div>
            </div>

            <div className="income-container">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income" className="img" />
                <div className="amount-container">
                    <p className="text">Your Income</p>
                    <p className="amount">{income}</p>
                </div>
            </div>

            <div className="expenses-container">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses" className="img" />
                <div className="amount-container">
                    <p className="text">Your Expenses</p>
                    <p className="amount">{expenses}</p>
                </div>
            </div>
        </div>
    )
}

export default MoneyDetails