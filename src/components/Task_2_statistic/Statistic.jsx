import css from './Statistics-style.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ mainTitle, stats }) => {

    return (
        <section className={css.statistics}>
            {mainTitle.length && <h2 className={css.title}>{mainTitle}</h2>}

            <ul className={css.statList}>
                {stats.map(stat => {
                    return (
                        <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

Statistics.propTypes = {

    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })

}

