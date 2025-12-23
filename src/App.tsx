import React, { useState } from 'react';
import './App.scss';

export interface Good {
  name: string;
}

const goodsFromServer: Good[] = [
  { name: 'Dumplings' },
  { name: 'Carrot' },
  { name: 'Eggs' },
  { name: 'Ice cream' },
  { name: 'Apple' },
  { name: 'Bread' },
  { name: 'Fish' },
  { name: 'Honey' },
  { name: 'Jam' },
  { name: 'Garlic' },
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([...goodsFromServer]);

  const isChanged = goods.some((g, i) => g.name !== goodsFromServer[i].name);

  const handleReverse = () => {
    setGoods(prev => [...prev].reverse());
  };

  const handleSortAlphabetically = () => {
    setGoods([...goodsFromServer].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleSortByLength = () => {
    setGoods(
      [...goodsFromServer].sort((a, b) => a.name.length - b.name.length),
    );
  };

  const handleReset = () => {
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="App">
      <h1>Goods List</h1>
      <div className="buttons">
        <button onClick={handleSortAlphabetically} data-cy="SortAlphabetically">
          Sort Alphabetically
        </button>
        <button onClick={handleReverse} data-cy="Reverse">
          Reverse
        </button>
        <button onClick={handleSortByLength} data-cy="SortByLength">
          Sort by length
        </button>
        {isChanged && (
          <button onClick={handleReset} data-cy="Reset">
            Reset
          </button>
        )}
      </div>
      <ul>
        {goods.map(good => (
          <li key={good.name} data-cy="Good">
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
