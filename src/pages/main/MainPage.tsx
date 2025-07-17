import {
  useStepsQuery,
  useUpdateStepMutation,
} from '../../hooks/steps/useStepsQuery';
import { Card } from '../../components/Card/Card';
import { HandoutsViewer } from './components/HandoutsViewer/HandoutsViewer';

export const MainPage = () => {
  const updateStep = useUpdateStepMutation();
  const { data: steps, isPending, isError } = useStepsQuery();

  const handleStepFinished = (stepIndex: number) => {
    updateStep(stepIndex, true);
  };

  if (isPending) {
    return (
      <Card>
        <p>Loading steps...</p>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card>
        <p>
          Error loading steps. Make sure data.json is in the same directory.
        </p>
      </Card>
    );
  }

  return <HandoutsViewer steps={steps} onStepFinish={handleStepFinished} />;
};
