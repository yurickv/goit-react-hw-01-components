import css from './FriendList-styles.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {

    return (
        <li className={css.friendItem} key={id}>
            {isOnline ? <span className={css.statusOn} ></span > : <span className={css.statusOff}></span>}
            <img className={css.friendAvatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.protType = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}