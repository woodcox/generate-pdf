import Form from './../formComponents/Form.jsx';
import { template } from './../pdfme/pdfSchema.jsx';
import { pdfState, setPdfState } from './../pdfme/pdfDefaultValues.jsx';

export default function YourDetails() {
  return (
    <>
      <Form
        template={template()}
        inputs={pdfState}
        onInputsChange={(newInputs) => setPdfState(newInputs)}
        heading="About you"
        pageNumber="1"
        currentPage="/your-details"
        prevPage="/"
        nextPage="/partner"
      />
    </>
  );
}
