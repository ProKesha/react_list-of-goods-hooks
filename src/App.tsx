import React, { useState } from 'react';

enum SortType {
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
  REVERSE = 'reverse',
}

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [sortType, setSortType] = useState<SortType>(SortType.NONE);

  const getSortedGoods = (): string[] => {
    switch (sortType) {
      case SortType.ALPHABET:
        return [...goodsFromServer].sort((a, b) => a.localeCompare(b));
      case SortType.LENGTH:
        return [...goodsFromServer].sort((a, b) => a.length - b.length);
      case SortType.REVERSE:
        return [...goodsFromServer].reverse();
      case SortType.NONE:
      default:
        return goodsFromServer;
    }
  };

  const visibleGoods = getSortedGoods();

  const getButtonClass = (type: SortType) =>
    sortType === type ? '' : 'is-light';

  return (
    <div className="App">
      <button
        type="button"
        className={getButtonClass(SortType.ALPHABET)}
        onClick={() => setSortType(SortType.ALPHABET)}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        className={getButtonClass(SortType.LENGTH)}
        onClick={() => setSortType(SortType.LENGTH)}
      >
        Sort by length
      </button>

      <button
        type="button"
        className={getButtonClass(SortType.REVERSE)}
        onClick={() => setSortType(SortType.REVERSE)}
      >
        Reverse
      </button>

      {sortType !== SortType.NONE && (
        <button type="button" onClick={() => setSortType(SortType.NONE)}>
          Reset
        </button>
      )}

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
