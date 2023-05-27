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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',

      }}
    >
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
