import { createStore } from 'solid-js/store';
import { Radios } from 'govuk-frontend';

const globalRadioValues = {};

const Radio = (props) => {
  // Derive the store name from the componentId prop
  const storeName = `radioValues_${props.componentId}`;

  // Initialize the radios component when the component mounts
  onMount(() => {
    const radiosElements = document.querySelectorAll('[data-module="govuk-radios"]');
    const radiosInstances = Array.from(radiosElements).map((element) => new Radios(element));

    // Cleanup function to destroy the radios instances when the component unmounts
    onCleanup(() => {
      radiosInstances.forEach((instance) => instance.destroy());
    });
  });

  // Check if the store for this component instance exists, if not, create a new one
  if (!globalRadioValues[storeName]) {
    globalRadioValues[storeName] = createStore({ value: '' });
  }

  const [radioState, setRadioState] = globalRadioValues[storeName];

  const handleChange = (e) => {
    setRadioState({ value: e.target.value });
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--2">
          <h2>{props.label}</h2>
        </legend>
        <div class="govuk-radios" data-module="govuk-radios">
          <For each={props.options}>
            {(option) => (
              <div class="govuk-radios__item">
                <input
                  class="govuk-radios__input"
                  type="radio"
                  name={props.componentId}
                  id={option.id}
                  value={option.value}
                  checked={radioState.value === option.value}
                  onChange={handleChange}
                />
                <label class="govuk-label govuk-radios__label" for={option.id}>
                  {option.value}
                </label>
              </div>
            )}
          </For>
        </div>
      </fieldset>
    </div>
  );
};

export default Radio;