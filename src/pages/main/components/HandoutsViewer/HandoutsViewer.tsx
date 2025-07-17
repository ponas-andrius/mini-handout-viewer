import type React from 'react';
import type { Step } from '../../../../types/step';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import './HandoutsViewer.css';
import { Card } from '../../../../components/Card/Card';
import classNames from 'classnames';

interface HandoutsViewerProps {
  steps: Step[];
  onStepFinish: (stepIndex: number) => void;
}

const focusButtonByIndex = (index: number) => {
  document.getElementById(`tab-id-${index}`)?.focus();
};

const scrollElementIntoViewByID = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const HandoutsViewer: React.FC<HandoutsViewerProps> = ({
  steps,
  onStepFinish,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const numberOfSteps = useMemo(() => steps.length, [steps]);
  const tabsList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!tabsList.current) return;

    const currentList = tabsList.current;
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;

      if (e.key === 'ArrowRight') {
        setCurrentStepIndex(prev => {
          const newIndex = prev + 1 >= numberOfSteps ? 0 : prev + 1;
          focusButtonByIndex(newIndex);
          return newIndex;
        });
      }
      if (e.key === 'ArrowLeft') {
        setCurrentStepIndex(prev => {
          const newIndex = prev - 1 < 0 ? numberOfSteps - 1 : prev - 1;
          focusButtonByIndex(newIndex);
          return newIndex;
        });
      }
    };

    currentList.addEventListener('keyup', handleKeyUp);

    return () => {
      currentList.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handlePrevStepClick = () => {
    const newIndex = Math.max(0, currentStepIndex - 1);
    setCurrentStepIndex(newIndex);
    scrollElementIntoViewByID(`tab-id-${newIndex}`);
  };

  const handleNextStepClick = () => {
    const newIndex = Math.min(numberOfSteps - 1, currentStepIndex + 1);
    setCurrentStepIndex(newIndex);
    scrollElementIntoViewByID(`tab-id-${newIndex}`);
    onStepFinish(currentStepIndex);
  };

  return (
    <main className="hw" role="main" id="main-content">
      <div className="hw__nav-wrapper">
        <nav className="hw__nav">
          <ul
            id="task-list"
            className="hw__nav-list"
            role="tablist"
            aria-label="Užduočių navigacija"
            ref={tabsList}
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
                  tabIndex={index === currentStepIndex ? 0 : -1}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hw__content">
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
              tabIndex={0}
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
      </div>
    </main>
  );
};
