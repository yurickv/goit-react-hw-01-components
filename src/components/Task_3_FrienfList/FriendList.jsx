import css from './FriendList-styles.module.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friensdData }) => {

    return (
        <section className={css.sectionFriend}>

            <ul className={css.friendList}>
                {friensdData.map(({ id, avatar, name, isOnline }) => {
                    return <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} />
                })}
            </ul>
        </section>
    )
}

