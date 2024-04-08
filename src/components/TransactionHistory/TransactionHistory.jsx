import css from './TransactionHistory.module.css'
import {TransactionItem} from '../TransactionItem/TransactionItem'

export const TransactionHistory =({items})=>{

return(<table className={css.transactionHistory}>
<thead className={css.transactionHead}>
  <tr className={css.transactionRow}>
    <th className={css.transactionTitle}>Type</th>
    <th className={css.transactionTitle}>Amount</th>
    <th className={css.transactionTitle}>Currency</th>
  </tr>
</thead>

<tbody>
 {items.map((item)=>{
    return(
        <TransactionItem key={item.id}
        type={item.type} 
        amount= {item.amount}
        currency={item.currency}  

        />
    )
 })}
</tbody>
</table>)
};

