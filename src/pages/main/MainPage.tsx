import { useStepsQuery } from "../../hooks/steps/useStepsQuery";

export const MainPage = () => {
    const { data: steps, isPending, isError } = useStepsQuery();

    if(isPending) {
        return (
            <div>
                <p>Loading steps...</p>
            </div>
        );
    };

    if(isError) {
        return (
            <div>
                <p>Error loading steps. Make sure data.json is in the same directory.</p>
            </div>
        );
    }

    return (
        <div className="ProseMirror" id="steps-container">
            {steps?.map((step, index) => (
                <div key={index} className={'tlte__step'}>
                    <h2 dangerouslySetInnerHTML={{ __html: step.summaryHtml }} />
                    <p dangerouslySetInnerHTML={{ __html: step.detailsHtml }} />
                </div>
            ))}
        </div>
    );
};