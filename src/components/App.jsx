import PropTypes from 'prop-types';

import user from './user.json';
import data from './data.json';
import friend from './friends.json'
import transaction from './transactions.json'

import { Profile } from 'components/Task_1_profile/Profile'
import { Statistics } from 'components/Task_2_statistic/Statistic'
import { FriendList } from 'components/Task_3_FrienfList/FriendList'
import { TransactionHistory } from 'components/Task_4_Transaction/Transaction'

export const App = () => {
  return (
    <div style={appStyle} >
      <Profile
        userName={user.username}
        tag={user.tag}
        locationUser={user.location}
        avatarUser={user.avatar}
        stats={user.stats}
      />
      <Statistics
        mainTitle={"Upload stats"}
        stats={data}
      />
      <FriendList
        friensdData={friend}
      />
      <TransactionHistory
        items={transaction}
      />

    </div>
  );
};






const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 16,
  color: '#010101',
}


user.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}





