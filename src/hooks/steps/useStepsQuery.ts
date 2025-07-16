import { useQuery } from '@tanstack/react-query';
import type { Step, StepResponse } from '../../types/Step';

const loadSteps = async () => {
  try {
    const response = await fetch('/data.json');
    const steps = await response.json();
    return stepsResponseToData(steps);
  } catch (error) {
    console.error('Error loading steps:', error);
    throw error;
  }
};

const stepsResponseToData = (response: StepResponse[]): Step[] => {
  return response.map(step => ({
    ...step,
    done: false,
  }));
};

export const useStepsQuery = () => {
  return useQuery<Step[]>({
    queryKey: ['steps'],
    queryFn: loadSteps,
  });
};
