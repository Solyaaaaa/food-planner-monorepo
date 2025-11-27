import React, { useState } from 'react';
import type { Meal } from '../types';

interface Props {
  meal: Meal;
  onSave: (meal: Meal) => void;
  onCancel: () => void;
}

export const MealForm: React.FC<Props> = ({ meal, onSave, onCancel }) => {
  const [localMeal, setLocalMeal] = useState<Meal>(meal);

  const addIngredient = () => {
    setLocalMeal({
      ...localMeal,
      ingredients: [...localMeal.ingredients, { name: '', amount: '' }]
    });
  };

  const updateIngredient = (idx: number, field: 'name' | 'amount', value: string) => {
    const newIngredients = [...localMeal.ingredients];
    newIngredients[idx][field] = value;
    setLocalMeal({ ...localMeal, ingredients: newIngredients });
  };

  const removeIngredient = (idx: number) => {
    setLocalMeal({ ...localMeal, ingredients: localMeal.ingredients.filter((_, i) => i !== idx) });
  };

  const handleSave = () => {
    if (!localMeal.name.trim()) return alert('Введите название блюда');
    const validIngredients = localMeal.ingredients.filter(i => i.name && i.amount);
    if (validIngredients.length === 0) return alert('Добавьте хотя бы один ингредиент');
    onSave(localMeal);
  };

  return (
    <div className="form-box form-orange">
      <input
        type="text"
        placeholder="Название блюда"
        value={localMeal.name}
        onChange={e => setLocalMeal({ ...localMeal, name: e.target.value })}
        className="mb-3"
      />
      {localMeal.ingredients.map((ing, idx) => (
        <div key={idx} className="input-group">
          <input
            type="text"
            placeholder="Ингредиент"
            value={ing.name}
            onChange={e => updateIngredient(idx, 'name', e.target.value)}
            className="input-flex"
          />
          <input
            type="text"
            placeholder="Кол-во"
            value={ing.amount}
            onChange={e => updateIngredient(idx, 'amount', e.target.value)}
            className="input-small"
          />
          <button onClick={() => removeIngredient(idx)} className="btn btn-red">✕</button>
        </div>
      ))}
      <div className="input-group mt-3">
        <button onClick={addIngredient} className="btn btn-small btn-gray">+ Ингредиент</button>
        <button onClick={handleSave} className="btn btn-small btn-orange">Сохранить</button>
        <button onClick={onCancel} className="btn btn-small btn-gray">Отмена</button>
      </div>
    </div>
  );
};