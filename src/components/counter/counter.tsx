import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAddToCount = () => setCount(prev => prev + 1);

  return (
    <div>
      <p>Current count {count}</p>
      <button onClick={handleAddToCount}>Add</button>
    </div>
  );
};
