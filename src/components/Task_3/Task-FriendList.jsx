import css from './FriendList-styles.css'

export const FriendList = ({ friensdData }) => {

    return (
        <section className="section-friend">

            <ul className="friend-list">
                {friensdData.map(({ id, avatar, name, isOnline }) => {
                    return (
                        <li className="friend-item" key={id}>
                            {isOnline ? <span className="status-on"></span> : <span className="status-off"></span>}
                            <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
                            <p className="name">{name}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
} 