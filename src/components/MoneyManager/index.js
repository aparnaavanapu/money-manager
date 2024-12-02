import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'


class MoneyManager extends Component{
    state={
        balance:0,
        expenses:0,
        income:0,
        title:'',
        amount:'',
        type:'Income',
        transactionList:[]
    }
    onChangeTitle=(event)=>{
        this.setState({title:event.target.value})

    }
    onChangeAmount=(event)=>{
        this.setState({amount:event.target.value})
    }
    onChangeType=(event)=>{
        this.setState({type:event.target.value})
    }

    addTransaction=(event)=>{
        event.preventDefault();
        const {title,amount,type,balance,income,expenses}=this.state
        const newTransaction={
            id:uuidv4(),
            title,
            amount,
            type
        }
        const parsedAmount = parseFloat(amount);

        let newBalance = balance;
        let newIncome = income;
        let newExpenses = expenses;

        if(type==='Income'){
            newBalance+=parsedAmount;
            newIncome+=parsedAmount;
        }
        else{
            newExpenses+=parsedAmount;
            newBalance-=parsedAmount;
        }

        this.setState(prevState=>({
            transactionList:[...prevState.transactionList,newTransaction],
            title:'',
            amount:'',
            type:'Income',
            balance:newBalance,
            income:newIncome,
            expenses:newExpenses
        }
            
        ))

    }
    deleteTransaction = (id) => {
        this.setState(prevState => {
            const transactionToDelete = prevState.transactionList.find(eachItem => id === eachItem.id);
    
    
            let { balance, income, expenses } = prevState;
    
            if (transactionToDelete.type === 'Expenses') {
                balance += Number(transactionToDelete.amount);
                expenses -= Number(transactionToDelete.amount);
            } else {
                income -= Number(transactionToDelete.amount);
                balance -= Number(transactionToDelete.amount);
            }
    
            return {
                transactionList: prevState.transactionList.filter(eachItem => id !== eachItem.id),
                balance,
                income,
                expenses,
            };
        });
    };
    


    render(){
        const {title,amount,transactionList,balance,income,expenses,type}=this.state

        return(
            <div className="bg-container">
                <div className="card-container">
                    <div className="name-container">
                        <h1 className="name">Hi,Richard</h1>
                        <p className="greeting-msg">Welcome back to your <span>Money Manager</span></p>
                    </div>
                    <MoneyDetails balance={balance} income={income} expenses={expenses}/>
                    <div className="tracnsaction-history-container">
                        <div className="transaction-container">
                            <form className="form-container" onSubmit={this.addTransaction}>
                                <p className="sub-heading">Add Transaction</p>
                                <label htmlFor="title">TITLE</label>
                                <input type="text" placeholder="TITLE" id="title" value={title} onChange={this.onChangeTitle} />
                                <label htmlFor="amount">AMOUNT</label>
                                <input type="text" placeholder="AMOUNT" id="amount" value={amount} onChange={this.onChangeAmount} />
                                <label htmlFor="IE">TYPE</label>
                                <select id="IE" value={type} onChange={this.onChangeType}>
                                    <option value="Income">Income</option>
                                    <option value="Expenses">Expenses</option>
                                </select>
                                <button type="submit" className="btn">Add</button>
                            </form>
                        </div>
                        <div className="history-table">
                            
                            <ul>
                            <p className="sub-heading">History</p>
                                <li className="table-header">
                                    <p className="table-heading">Title</p>
                                    <p className="table-heading">Amount</p>
                                    <p className="table-heading">Type</p>
                                </li>
                                {transactionList.map(eachItem=>(
                                    <TransactionItem details={eachItem} key={eachItem.id} deleteTransaction={this.deleteTransaction} />
                                ))}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyManager