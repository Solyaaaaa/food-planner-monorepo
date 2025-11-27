import React from 'react';

interface Props {
  shoppingList: Record<string, string>;
  show: boolean;
  toggle: () => void;
}

export const ShoppingList: React.FC<Props> = ({ shoppingList, show, toggle }) => {
  if (!show) return <button onClick={toggle} className="btn btn-purple btn-small">Показать список</button>;

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h2 className="purple">Список покупок</h2>
        <button onClick={toggle} className="btn btn-purple btn-small">Скрыть</button>
      </div>
      <div className="shopping-list">
        {Object.keys(shoppingList).length === 0 ? (
          <p className="text-gray text-center">Выберите блюда на неделю, чтобы сформировать список покупок.</p>
        ) : (
          Object.entries(shoppingList).map(([name, amount], idx) => (
            <div key={idx} className="shopping-item">
              <span>{name}</span>
              <span>{amount}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};