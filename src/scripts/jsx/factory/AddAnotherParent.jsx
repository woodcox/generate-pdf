import { createSignal, For, Show, onCleanup, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';
import { makePersisted } from './makePersisted.jsx';

// Capitalise the first letter of a string. This is used in the AddAnother component to adjust the {prop.title}.
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Define a global object to store the state of all instances of AddAnotherParent
const globalParentValues = {};

function AddAnotherParent(props) {
  /* Conditionslly render if the first group of fields is visible based on the visible prop passed into the component.
  Example:
  <AddAnotherParent
    title="parent"
    grammar="Your"
    visible={true}   // If true render the first field group, if null or false don't render the fields
  />
  */

  const [parentInput, setParentInput] = createStore({
    inputValues: [],
  });

  createEffect(() => {
    if (props.visible && parentInput.inputValues.length === 0) {
      setParentInput("inputValues", [
        { id: 1, fullName: "", isAlive: "", jobTitle: "", isRetired: "" },
      ]);
    }
  });

  const [parentInput, setParentInput] = createStore({
    inputValues: props.visible
      ? [{ id: 1, fullName: '', isAlive: '', jobTitle: '', isRetired: '' }]
      : [],
  });

  let nextId = 2;
  let newInputRef = null;

  // Add a new parent
  const addItem = () => {
    if (parentInput.inputValues.length < 2) {
      setParentInput('inputValues', (prev) => [
        ...prev,
        {
          id: nextId++,
          fullName: '',
          isAlive: '',
          jobTitle: '',
          isRetired: '',
        },
      ]);

      setTimeout(() => {
        if (newInputRef) {
          newInputRef.focus();
        }
      }, 0);
    }
  };

  // Remove a parent by ID
  const removeItem = (id) => {
    setParentInput('inputValues', (prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Handle field updates
  const updateField = (id, field, value) => {
    setParentInput('inputValues', (item) => item.id === id, field, value);
  };

  createEffect(
    console.log('parent inputs:', parentInput)
  );


  return (
    <div>
      <For each={parentInput.inputValues}>
        {(item, index) => (
          <div key={item.id} class="govuk-form-group">
            <h2>
              {props.grammar} {props.title} {index() + 1}
            </h2>
            <div id="parents-hint" class="govuk-hint">
              {props.hintText}
            </div>

            {/* Full Name Input */}
            <div class="govuk-form-group">
              <label
                for={`input-${item.id}-${props.title}-name`}
                class="govuk-label"
              >
                {capFirstLetter(props.title)} {index() + 1} full name
              </label>
              <input
                id={`input-${item.id}-${props.title}-name`}
                class="govuk-input"
                type="text"
                value={item.fullName}
                ref={(el) => {
                  if (index() === parentInput.inputValues.length - 1) newInputRef = el;
                }}
                onChange={(e) => updateField(item.id, "fullName", e.target.value)}
              />
            </div>

            {/* Is Alive Radio Buttons */}
            <div class="govuk-form-group">
              <fieldset class="govuk-fieldset">
                <legend class="govuk-fieldset__legend govuk-fieldset__legend">
                  Is {props.title} {index() + 1} alive?
                </legend>
                <div class="govuk-radios">
                  <div class="govuk-radios__item">
                    <input
                      class="govuk-radios__input"
                      type="radio"
                      name={`input-${item.id}-${props.title}-isAlive`}
                      value="Yes, they are alive"
                      checked={item.isAlive === "Yes, they are alive"}
                      onChange={(e) =>
                        updateField(item.id, "isAlive", e.target.value)
                      }
                    />
                    <label class="govuk-label govuk-radios__label">
                      Yes, they are alive
                    </label>
                  </div>
                  <div class="govuk-radios__item">
                    <input
                      class="govuk-radios__input"
                      type="radio"
                      name={`input-${item.id}-${props.title}-isAlive`}
                      value="No, they have died"
                      checked={item.isAlive === "No, they have died"}
                      onChange={(e) =>
                        updateField(item.id, "isAlive", e.target.value)
                      }
                    />
                    <label class="govuk-label govuk-radios__label">
                      No, they have died
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Job Title Input (Conditional === Died) */}
            <Show when={item.isAlive === "No, they have died"}>
              <div class="govuk-form-group">
                <label
                  for={`input-${item.id}-${props.title}-job`}
                  class="govuk-label"
                >
                  {capFirstLetter(props.title)} {index() + 1}'s last job
                </label>
                <input
                  id={`input-${item.id}-${props.title}-job`}
                  class="govuk-input"
                  type="text"
                  value={item.jobTitle}
                  onChange={(e) => updateField(item.id, "jobTitle", e.target.value)}
                />
              </div>

              {/* Retired radio buttons (Conditional === Died) */}
              <div class="govuk-form-group">
                <fieldset class="govuk-fieldset">
                  <legend class="govuk-fieldset__legend govuk-fieldset__legend">
                    {`Had ${props.title} ${index() + 1} retired before they died?`}
                  </legend>
                  <div class="govuk-radios" data-module="govuk-radios">
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        type="radio"
                        name={`input-${item.id}-${props.title}-isRetired`}
                        id={`input-${item.id}-${props.title}-isRetired`}
                        value="Yes"
                        checked={item.isRetired === 'Yes'}
                        onChange={(e) =>
                          updateField(item.id, 'isRetired', e.target.value)
                        }
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for={`input-${item.id}-${props.title}-isRetired`}
                      >
                        Yes, they retired
                      </label>
                    </div>
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id={`input-${item.id}-${props.title}-isRetired-2`}
                        name={`input-${item.id}-${props.title}-isRetired`}
                        type="radio"
                        value="No"
                        checked={item.isRetired === 'No'}
                        onChange={(e) =>
                          updateField(item.id, 'isRetired', e.target.value)
                        }
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for={`input-${item.id}-${props.title}-isRetired-2`}
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </Show>

            {/* Job Title Input (Conditional === Alive) */}
            <Show when={item.isAlive === "Yes, they are alive"}>
              <div class="govuk-form-group">
                <label
                  for={`input-${item.id}-${props.title}-job`}
                  class="govuk-label"
                >
                  {capFirstLetter(props.title)} {index() + 1}'s current or last job
                </label>
                <input
                  id={`input-${item.id}-${props.title}-job`}
                  class="govuk-input"
                  type="text"
                  value={item.jobTitle}
                  onChange={(e) => updateField(item.id, "jobTitle", e.target.value)}
                />
              </div>

              {/* Retired radio buttons (Conditional === Alive) */}
              <div class="govuk-form-group">
                <fieldset class="govuk-fieldset">
                  <legend class="govuk-fieldset__legend govuk-fieldset__legend">
                    {`Is ${props.title} ${index() + 1} retired?`}
                  </legend>
                  <div class="govuk-radios" data-module="govuk-radios">
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        type="radio"
                        name={`input-${item.id}-${props.title}-isRetired`}
                        id={`input-${item.id}-${props.title}-isRetired`}
                        value="Yes"
                        checked={item.isRetired === 'Yes'}
                        onChange={(e) =>
                          updateField(item.id, 'isRetired', e.target.value)
                        }
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for={`input-${item.id}-${props.title}-isRetired`}
                      >
                        Yes, they retired
                      </label>
                    </div>
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id={`input-${item.id}-${props.title}-isRetired-2`}
                        name={`input-${item.id}-${props.title}-isRetired`}
                        type="radio"
                        value="No"
                        checked={item.isRetired === 'No'}
                        onChange={(e) =>
                          updateField(item.id, 'isRetired', e.target.value)
                        }
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for={`input-${item.id}-${props.title}-isRetired-2`}
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </Show>

            {/* Remove Button */}
            <div class="govuk-button-group">
              <button
                type="button"
                class="govuk-button govuk-button--secondary"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </For>

      {/* Add Button */}
      <Show when={parentInput.inputValues.length < 2}>
        <button type="button" class="govuk-button" onClick={addItem}>
          Add {props.title}
        </button>
      </Show>
    </div>
  );
}

export default AddAnotherParent;