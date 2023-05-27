import PropTypes from 'prop-types';

import user from './user.json';
import data from './data.json';
import friend from './friends.json'
import transaction from './transactions.json'

import { Profile } from 'components/Task_1/Task1'
import { Statistics } from 'components/Task_2/Task-statistic'
import { FriendList } from 'components/Task_3/Task-FriendList'
import { TransactionHistory } from 'components/Task_4/Task-transaction'

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
        MainTitle={"Upload stats"}
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

data.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.string.isRequired,
    vatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })

}

transaction.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })
}
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 16,
  color: '#010101',
}