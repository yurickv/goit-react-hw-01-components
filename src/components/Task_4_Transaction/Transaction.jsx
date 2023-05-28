import css from './Transaction-style.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {

    return (
        <section className={css.sectionTransaction}>
            <tr className={css.transactionHeader}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>

            <tbody className={css.transactionList}>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={css.transactionItem} key={id}>
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

TransactionHistory.propTypes = {

    items: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })

}

