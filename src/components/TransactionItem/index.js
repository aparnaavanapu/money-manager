
import './index.css'

const TransactionItem=(props)=>{
    const {details,deleteTransaction}=props
    const {id,title,amount,type}=details

    const deleteItem=()=>{
        deleteTransaction(id);
    }

    return(
        <li className="table-list">
            <p className="table-list-item">{title}</p>
            <p className="table-list-item">{amount}</p>
            <p className="table-list-item">{type}</p>
            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" className="delete-icon" alt="delete"  onClick={deleteItem}/>
        </li>
    )




}
export default TransactionItem