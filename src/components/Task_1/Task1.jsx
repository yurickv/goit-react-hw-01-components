import './Task-style1.css';
import { FcAddressBook, FcHome, FcLike, FcReddit, FcReading } from "react-icons/fc";


export const Profile = ({ userName, tag, locationUser, avatarUser, stats }) => {
    return (
        <div className='profile'>
            <div className="description">
                <img
                    src={avatarUser}
                    alt={userName}
                    className="avatar"
                />
                <p className="name">{userName}</p>
                <p className="tag"> <FcAddressBook className='icon' />{tag}</p>
                <p className="location"><FcHome className='icon' />{locationUser}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity"><FcReddit className='icon' />{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity"><FcReading className='icon' />{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity"><FcLike className='icon' />{stats.likes}</span>
                </li>
            </ul>
        </div>)
}


