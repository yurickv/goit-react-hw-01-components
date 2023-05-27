import user from './user.json';
import data from './data.json'
import { Profile } from 'components/Task_1/Task1'
import { Statistics } from 'components/Task_2/Task-statistic'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
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
        stats={data} />

    </div>
  );
};
