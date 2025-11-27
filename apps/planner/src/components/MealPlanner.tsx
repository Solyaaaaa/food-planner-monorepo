import React, { useState, useEffect } from 'react';
import type { WeekDay, Meal } from '../types';
import { initialBreakfasts, initialLunchDinner } from '../data/meals';
import { MealsColumn } from "./MealColumn";
import { WeekTable } from './WeekTable.tsx';
import { ShoppingList } from './ShoppingList.tsx';

export const MealPlanner: React.FC = () => {
  const [breakfasts, setBreakfasts] = useState<Meal[]>(initialBreakfasts);
  const [lunchDinner, setLunchDinner] = useState<Meal[]>(initialLunchDinner);
  const [weekPlan, setWeekPlan] = useState<WeekDay[]>([
    { day: 'Понедельник', breakfast: null, lunch: null, dinner: null },
    { day: 'Вторник', breakfast: null, lunch: null, dinner: null },
    { day: 'Среда', breakfast: null, lunch: null, dinner: null },
    { day: 'Четверг', breakfast: null, lunch: null, dinner: null },
    { day: 'Пятница', breakfast: null, lunch: null, dinner: null },
    { day: 'Суббота', breakfast: null, lunch: null, dinner: null },
    { day: 'Воскресенье', breakfast: null, lunch: null, dinner: null },
  ]);

  const [showShoppingList, setShowShoppingList] = useState(false);

  // Загружаем данные из localStorage
  useEffect(() => {
    const savedBreakfasts = localStorage.getItem('breakfasts');
    const savedLunchDinner = localStorage.getItem('lunchDinner');
    const savedWeekPlan = localStorage.getItem('weekPlan');
    if (savedBreakfasts) setBreakfasts(JSON.parse(savedBreakfasts));
    if (savedLunchDinner) setLunchDinner(JSON.parse(savedLunchDinner));
    if (savedWeekPlan) setWeekPlan(JSON.parse(savedWeekPlan));
  }, []);

  const saveData = () => {
    localStorage.setItem('breakfasts', JSON.stringify(breakfasts));
    localStorage.setItem('lunchDinner', JSON.stringify(lunchDinner));
    localStorage.setItem('weekPlan', JSON.stringify(weekPlan));
    alert('Данные сохранены!');
  };

  const addMeal = (meal: Meal, type: 'breakfast' | 'lunchDinner') => {
    if (type === 'breakfast') setBreakfasts([...breakfasts, meal]);
    else setLunchDinner([...lunchDinner, meal]);
  };

  const deleteMeal = (id: number, type: 'breakfast' | 'lunchDinner') => {
    if (!confirm('Удалить это блюдо?')) return;
    if (type === 'breakfast') setBreakfasts(breakfasts.filter(m => m.id !== id));
    else setLunchDinner(lunchDinner.filter(m => m.id !== id));
  };

  const editMeal = (meal: Meal, type: 'breakfast' | 'lunchDinner') => {
    // Здесь можно добавить редактирование через MealsColumn
    console.log('Редактируем блюдо', meal, type);
  };

  const updateMeal = (dayIdx: number, mealType: 'breakfast' | 'lunch' | 'dinner', mealId: number) => {
    const newPlan = [...weekPlan];
    newPlan[dayIdx][mealType] = mealId;
    setWeekPlan(newPlan);
  };

  const calculateShoppingList = (): Record<string, string> => {
    const ingredients: Record<string, string> = {};
    weekPlan.forEach(day => {
      ['breakfast', 'lunch', 'dinner'].forEach(mt => {
        const mealId = day[mt as keyof WeekDay] as number | null;
        if (!mealId) return;
        const meal =
          mt === 'breakfast'
            ? breakfasts.find(m => m.id === mealId)
            : lunchDinner.find(m => m.id === mealId);
        if (!meal) return;
        meal.ingredients.forEach(ing => {
          if (ingredients[ing.name]) {
            // склеиваем количество (только простая сумма чисел, без сложной логики единиц)
            const oldAmount = parseInt(ingredients[ing.name].replace(/\D/g, '')) || 0;
            const newAmount = parseInt(ing.amount.replace(/\D/g, '')) || 0;
            const unit = ing.amount.replace(/\d+/g, '').trim();
            ingredients[ing.name] = `${oldAmount + newAmount}${unit}`;
          } else {
            ingredients[ing.name] = ing.amount;
          }
        });
      });
    });
    return ingredients;
  };

  const shoppingList = calculateShoppingList();

  const clearAll = () => {
    if (!confirm('Очистить все поля и очистить данные?')) return;
    setWeekPlan(weekPlan.map(d => ({ ...d, breakfast: null, lunch: null, dinner: null })));
    localStorage.removeItem('weekPlan');
    alert('Календарь очищен!');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Планировщик питания</h1>
        <button onClick={saveData} className="btn btn-green">💾 Сохранить всё</button>
      </div>

      <div className="grid-2">
        <MealsColumn
          meals={breakfasts}
          title="Завтраки"
          colorClass="orange"
          onAddMeal={meal => addMeal(meal, 'breakfast')}
          onDeleteMeal={id => deleteMeal(id, 'breakfast')}
          onEditMeal={meal => editMeal(meal, 'breakfast')}
        />

        <MealsColumn
          meals={lunchDinner}
          title="Обеды/Ужины"
          colorClass="green"
          onAddMeal={meal => addMeal(meal, 'lunchDinner')}
          onDeleteMeal={id => deleteMeal(id, 'lunchDinner')}
          onEditMeal={meal => editMeal(meal, 'lunchDinner')}
        />
      </div>

      <WeekTable
        weekPlan={weekPlan}
        breakfasts={breakfasts}
        lunchDinner={lunchDinner}
        updateMeal={updateMeal}
      />

      <button onClick={clearAll} className="btn btn-red btn-small mt-3">
        🧹 Очистить всё
      </button>

      <ShoppingList
        shoppingList={shoppingList}
        show={showShoppingList}
        toggle={() => setShowShoppingList(!showShoppingList)}
      />
    </div>
  );
};