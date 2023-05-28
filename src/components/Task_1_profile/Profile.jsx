import css from './Profile-style.module.css';
import { FcAddressBook, FcHome, FcLike, FcReddit, FcReading } from "react-icons/fc";


export const Profile = ({ userName, tag, locationUser, avatarUser, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatarUser}
                    alt={userName}
                    className={css.avatar}
                />
                <p className={css.name}>{userName}</p>
                <p className={css.tag}> <FcAddressBook className={css.icon} />{tag}</p>
                <p className={css.location} > <FcHome className={css.icon} />{locationUser}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}><FcReddit className={css.icon} />{stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}><FcReading className={css.icon} />{stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}><FcLike className={css.icon} />{stats.likes}</span>
                </li>
            </ul>
        </div>)
}


