import { generate } from '@pdfme/generator';
import { createSignal } from 'solid-js';
import { template, setTemplate } from './pdfme/schema.jsx';
import { inputs, setInputs } from './state/formInputs.jsx';

function PdfmeGenerator() {

  async function generatePdf() {
    console.log(template());
    console.log(inputs());

    const pdf = await generate({
      template: template(),
      inputs: [inputs()],
    });

    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
    //setInputs(defaultValues); // Reset inputs to default state after pdf generated
  }

  return (
    <>
        <CreatePdf 
          generatePdf={generatePdf}
        />
    </>
  );
}

function CreatePdf(props) {
  return (
    <article>
      <p>Please generate your ceremony options as a PDF. Then email it to ....</p>
      <button type="reset" onClick={props.generatePdf}>Create PDF</button>
      <a href="/">
        <i>Cancel</i>
      </a>
    </article>
  );
}

function YourDetails(props) {
  return (
    <form>
      {Object.entries(props.template.schemas[0]).map(([property, config]) => (
        <label for={property}>
          {config.label}
          {!config.required && <span> (optional)</span>}:
          <input
            name={property}
            id={property}
            type={config.fieldType}
            title={config.errormessage}
            required={config.required}
            placeholder={config.placeholder}
            pattern={config.pattern}
            autocomplete={config.autocomplete}
            autofocus={config.autofocus}
            value={props.inputs[property]}
            onChange={(e) =>
              props.onInputsChange({
                ...props.inputs,
                [property]: e.target.value,
              })
            }
          />
        </label>
      ))}
      <nav>
        <a href="/partner">Back</a>
        <a href="/partner">Next</a>
      </nav>
    </form>
  );
}

export default PdfmeGenerator;