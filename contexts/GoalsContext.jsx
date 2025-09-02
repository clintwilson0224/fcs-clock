// src/context/GoalsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const GoalsContext = createContext();

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  
  async function fetchGoals() {
    try {
     
      const fetchedGoals = [
        { id: 1, goal: 'Learn React Native', progress: 20 },
        { id: 2, goal: 'Build an App', progress: 10 },
      ];
      setGoals(fetchedGoals);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  }


  async function createGoal(goalData) {
    try {
      const newGoal = { id: goals.length + 1, ...goalData }; 
      setGoals((prevGoals) => [...prevGoals, newGoal]);
      console.log('Goal created:', newGoal);
    } catch (error) {
      console.error('Error creating goal:', error);
    }
  }

  
  async function deleteGoal(goalId) {
    try {
      setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== goalId));
      console.log(`Goal with id ${goalId} deleted.`);
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  }


  async function updateGoal(goalId, updatedData) {
    try {
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.id === goalId ? { ...goal, ...updatedData } : goal
        )
      );
      console.log(`Goal with id ${goalId} updated.`);
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  }

  
  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <GoalsContext.Provider value={{ goals, fetchGoals, createGoal, deleteGoal, updateGoal }}>
      {children}
    </GoalsContext.Provider>
  );
}
