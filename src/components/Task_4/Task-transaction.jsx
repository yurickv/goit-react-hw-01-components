import './Transaction-style.css'

export const TransactionHistory = ({ items }) => {

    return (
        <section className="section-transaction">
            <tr className="transaction-header">
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>

            <tbody className="transaction-list">
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className="transaction-item" key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </section>
    )
} 
