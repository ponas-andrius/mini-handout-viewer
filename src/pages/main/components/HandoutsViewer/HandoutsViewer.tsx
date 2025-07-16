import type React from 'react';
import type { Step } from '../../../../types/step';
import { useMemo, useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import './HandoutsViewer.css';
import { Card } from '../../../../components/Card/Card';
import classNames from 'classnames';

interface HandoutsViewerProps {
  steps: Step[];
  onStepFinish: (stepIndex: number) => void;
}

export const HandoutsViewer: React.FC<HandoutsViewerProps> = ({
  steps,
  onStepFinish,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const numberOfSteps = useMemo(() => steps.length, [steps]);

  const handlePrevStepClick = () => {
    const newIndex = Math.max(0, currentStepIndex - 1);
    setCurrentStepIndex(newIndex);
    document
      .getElementById(`tab-id-${newIndex}`)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNextStepClick = () => {
    const newIndex = Math.min(numberOfSteps - 1, currentStepIndex + 1);
    setCurrentStepIndex(newIndex);
    document
      .getElementById(`tab-id-${newIndex}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    onStepFinish(currentStepIndex);
  };

  return (
    <div className="hw">
      <aside className="hw__nav-wrapper">
        <nav className="hw__nav">
          <ul
            className="hw__nav-list"
            role="tablist"
            aria-label="Užduočių navigacija"
          >
            {steps.map((step, index) => (
              <li key={index} className="hw__nav-item">
                <Button
                  onClick={() => setCurrentStepIndex(index)}
                  square
                  variant={
                    step.done
                      ? 'success'
                      : index === currentStepIndex
                        ? 'secondary'
                        : 'primary'
                  }
                  role="tab"
                  aria-selected={index === currentStepIndex}
                  aria-controls={`tab-panel-id-${index}`}
                  id={`tab-id-${index}`}
                  title={step.title}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="hw__content" role="main" id="main-content">
        <Card block className="hw__content-card" id="tabs-panel">
          {steps.map((step, index) => (
            <div
              className={classNames('ProseMirror', 'hw__content-wrapper', {
                'hw__content-wrapper--hidden': index !== currentStepIndex,
              })}
              key={index}
              role="tabpanel"
              aria-labelledby={`tab-id-${index}`}
              id={`tab-panel-id-${index}`}
              hidden={index !== currentStepIndex}
            >
              <h2 dangerouslySetInnerHTML={{ __html: step.summaryHtml }} />
              <p dangerouslySetInnerHTML={{ __html: step.detailsHtml }} />
            </div>
          ))}
          <footer className="hw__footer">
            <nav className="hw__footer-nav">
              <ul className="hw__footer-nav-list">
                <li className="hw__footer-nav-item">
                  <Button
                    onClick={handlePrevStepClick}
                    variant="secondary"
                    disabled={currentStepIndex === 0}
                  >
                    Atgal
                  </Button>
                </li>
                {currentStepIndex < numberOfSteps - 1 && (
                  <li className="hw__footer-nav-item">
                    <Button onClick={handleNextStepClick}>Toliau</Button>
                  </li>
                )}
                {currentStepIndex === numberOfSteps - 1 && (
                  <li className="hw__footer-nav-item">
                    <Button onClick={() => onStepFinish(currentStepIndex)}>
                      Užbaigti
                    </Button>
                  </li>
                )}
              </ul>
            </nav>
          </footer>
        </Card>
      </main>
    </div>
  );
};
