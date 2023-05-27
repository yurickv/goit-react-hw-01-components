import './Task-style1.css'

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
                <p className="tag">@{tag}</p>
                <p className="location">{locationUser}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>)
}