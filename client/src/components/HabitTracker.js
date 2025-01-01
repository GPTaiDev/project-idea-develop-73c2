import React, { useState } from 'react';
import HabitList from './HabitList';
import CalendarProgress from './CalendarProgress';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  // Add more functions for habit management

  return (
    <div>
      <HabitList habits={habits} setHabits={setHabits} />
      <CalendarProgress habits={habits} />
    </div>
  );
};

export default HabitTracker;
