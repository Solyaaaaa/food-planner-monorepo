import React, { useState } from 'react';
import type { Meal } from '../types';
import { MealCard } from './MealCard';
import { MealForm } from './MealForm';

interface Props {
  meals: Meal[];
  title: string;
  colorClass: string;
  onAddMeal: (meal: Meal) => void;
  onDeleteMeal: (id: number) => void;
  onEditMeal: (meal: Meal) => void;
}

export const MealsColumn: React.FC<Props> = ({ meals, title, colorClass, onAddMeal, onDeleteMeal, onEditMeal }) => {
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newMeal, setNewMeal] = useState<Meal>({ id: 0, name: '', ingredients: [{ name: '', amount: '' }] });

  const handleSave = (meal: Meal) => {
    const id = meals.length ? Math.max(...meals.map(m => m.id)) + 1 : 1;
    onAddMeal({ ...meal, id });
    setNewMeal({ id: 0, name: '', ingredients: [{ name: '', amount: '' }] });
    setShowForm(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className={colorClass}>{title}</h2>
        <button onClick={() => setShowForm(!showForm)} className={`btn btn-small ${colorClass}`}>+ Добавить</button>
        <button onClick={() => setShowList(!showList)} className="btn btn-gray btn-small">
          {showList ? '▲ Свернуть' : '▼ Развернуть'}
        </button>
      </div>

      {showForm && <MealForm meal={newMeal} onSave={handleSave} onCancel={() => setShowForm(false)} />}

      {showList && meals.map(meal => (
        <MealCard
          key={meal.id}
          meal={meal}
          onDelete={() => onDeleteMeal(meal.id)}
          onEdit={() => { setNewMeal(meal); setShowForm(true); onEditMeal(meal); }}
        />
      ))}
    </div>
  );
};