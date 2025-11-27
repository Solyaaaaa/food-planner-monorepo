import React from 'react';
import type { WeekDay, Meal } from '../types';

interface Props {
  weekPlan: WeekDay[];
  breakfasts: Meal[];
  lunchDinner: Meal[];
  updateMeal: (dayIdx: number, mealType: 'breakfast' | 'lunch' | 'dinner', mealId: number) => void;
}

export const WeekTable: React.FC<Props> = ({ weekPlan, breakfasts, lunchDinner, updateMeal }) => {
  return (
    <div className="card">
      <h2 className="blue">План недели</h2>
      <table>
        <thead>
          <tr>
            <th>День</th>
            <th>Завтрак</th>
            <th>Обед</th>
            <th>Ужин</th>
          </tr>
        </thead>
        <tbody>
          {weekPlan.map((day, idx) => (
            <tr key={day.day}>
              <td>{day.day}</td>
              <td>
                <select value={day.breakfast ?? ''} onChange={e => updateMeal(idx, 'breakfast', Number(e.target.value))}>
                  <option value="">—</option>
                  {breakfasts.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
              </td>
              <td>
                <select value={day.lunch ?? ''} onChange={e => updateMeal(idx, 'lunch', Number(e.target.value))}>
                  <option value="">—</option>
                  {lunchDinner.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
              </td>
              <td>
                <select value={day.dinner ?? ''} onChange={e => updateMeal(idx, 'dinner', Number(e.target.value))}>
                  <option value="">—</option>
                  {lunchDinner.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};