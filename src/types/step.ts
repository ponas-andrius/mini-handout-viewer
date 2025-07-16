export interface StepResponse {
  summaryHtml: string;
  detailsHtml: string;
}

export interface Step extends StepResponse {
  done: boolean;
  title: string;
}
