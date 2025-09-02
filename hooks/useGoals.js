import { useContext } from 'react';
import { GoalsContext } from '../contexts/GoalsContext';  // Adjust path as necessary

export function useGoals() {
  const context = useContext(GoalsContext);
  
  if (!context) {
    throw new Error('useGoals must be used within a GoalsProvider');
  }

  return context;
}
