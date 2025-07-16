import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { Step, StepResponse } from '../../types/step';

const KEY = 'steps';

// Using LocalStorage to emulate server data
// First time we load data from server, we save it to LocalStorage
// All the next times we'll just use local storage
const updateLocalStorage = (steps: Step[]) => {
  const existingSteps = localStorage.getItem(KEY);

  if (!existingSteps) {
    localStorage.setItem(KEY, JSON.stringify(steps));
    return steps;
  }

  const existingStepsJson: Step[] = JSON.parse(existingSteps);
  return existingStepsJson;
};

const loadSteps = async () => {
  try {
    const response = await fetch('/data.json');
    const steps = await response.json();

    return updateLocalStorage(stepsResponseToData(steps));
  } catch (error) {
    console.error('Error loading steps:', error);
    throw error;
  }
};

const stepsResponseToData = (response: StepResponse[]): Step[] => {
  return response.map((step, index) => ({
    ...step,
    done: false,
    title: `Užduotis nr. ${index + 1}`,
  }));
};

export const useStepsQuery = () => {
  return useQuery<Step[]>({
    queryKey: [KEY],
    queryFn: loadSteps,
  });
};

export const useUpdateStepMutation = () => {
  const queryClient = useQueryClient();

  const updateDoneStatus = (stepIndex: number, done: boolean) => {
    const steps = queryClient.getQueryData<Step[]>([KEY]);

    if (!steps) {
      return;
    }

    steps[stepIndex].done = done;
    localStorage.setItem(KEY, JSON.stringify(steps));
    queryClient.setQueryData([KEY], steps);
  };

  return updateDoneStatus;
};
