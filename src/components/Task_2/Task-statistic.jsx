import css from './Statistics-style.css'

export const Statistics = ({ MainTitle, stats }) => {

    return (
        <section className="statistics">
            {MainTitle.length && <h2 className="title">{MainTitle}</h2>}

            <ul className="stat-list">
                {stats.map(stat => {
                    return (
                        <li className="item" key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
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

