import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {  
      return (  
        <section>  
          <h2 className={s.title}>Transaction History</h2>  
          <table className={s.table}>  
            <thead>  
              <tr>  
                <th className={s.thferst}>Type</th>  
                <th className={s.thferst}>Amount</th>  
                <th className={s.thferst}>Currency</th>  
              </tr>  
            </thead>  
            <tbody>  
              {items.map((transaction) => (  
                <tr key={transaction.id}>  
                  <td className={s.thp}>{transaction.type}</td>  
                  <td className={s.thp}>{transaction.amount}</td>  
                  <td className={s.thp}>{transaction.currency}</td>  
                </tr>  
              ))}  
            </tbody>  
          </table>  
        </section>  
      );  
    };  

export default TransactionHistory;
