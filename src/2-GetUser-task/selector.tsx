import { useState } from 'react';
import { User } from '../2.a-task';

const values = [1, 2, 3, 4];

const Selector = () => {
  const [userId, setUserId] = useState<null | number>(null);

  return (
    <div style={{ marginTop: '1rem' }} className="stack column">
      {values.map((id) => (
        <button key={id} onClick={() => setUserId(id)} className={id === userId ? 'active' : ''} value={id}>
          Select userId: {id}
        </button>
      ))}
      <button onClick={() => setUserId(null)}>Clear X</button>
      <div style={{ marginTop: '2rem', border: '1px solid lightgray', borderRadius: '8px' }} className="stack column">
        <User userId={userId} />
      </div>
    </div>
  );
};

export default Selector;
