import React from 'react';
import type { Meal } from '../types';

interface Props {
  meal: Meal;
  onDelete: () => void;
  onEdit: () => void;
}

export const MealCard: React.FC<Props> = ({ meal, onDelete, onEdit }) => {
  return (
    <div className="meal-card">
      <button onClick={onDelete} className="btn btn-red delete-btn">🗑️</button>
      <button onClick={onEdit} className="btn btn-gray btn-small" style={{ position: 'absolute', top: '10px', right: '50px' }}>✏️</button>
      <h3>{meal.name}</h3>
      <div className="ingredient-list">
        {meal.ingredients.length > 0 && (
          <>
            <p>Ингредиенты (2 порции):</p>
            <ul>
              {meal.ingredients.map((ing, idx) => (
                <li key={idx}>{ing.name} - {ing.amount}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};