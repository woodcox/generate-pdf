<fieldset class="wc-fieldset">
  <legend class="wc-legend" @text="event-date-title"></legend>
  <span class="wc-hint" id="mdHint">For example: 19 January 2000</span>
  <div class="wc-event-date">
    <div class="wc-form-group wc-form-group--day">
      <label class="wc-label" for="date_of_birth_day">Day</label>
      <input class="wc-input" aria-describedby="mdHint" id="date_of_birth_day" name="date_of_birth_day"
        maxlength="2" pattern="[0-9]*" inputmode="numeric" value="" 
        {% if disabled_state == 'disabled' %} disabled
        {% elseif disabled_state == 'aria-disabled' %} aria-disabled="true" {%- endif %}
      />
    </div>
    <div class="wc-form-group wc-form-group--month usa-form-group--select">
      <label class="wc-label" for="date_of_birth_month">Month</label>
      <select class="wc-select" id="date_of_birth_month" name="date_of_birth_month" aria-describedby="mdHint"
        {% if disabled_state == 'disabled' %} disabled
        {% elseif disabled_state == 'aria-disabled' %} aria-disabled="true" {%- endif %}
      >
        <option value>- Select -</option>
        <option value="1">01 - January</option>
        <option value="2">02 - February</option>
        <option value="3">03 - March</option>
        <option value="4">04 - April</option>
        <option value="5">05 - May</option>
        <option value="6">06 - June</option>
        <option value="7">07 - July</option>
        <option value="8">08 - August</option>
        <option value="9">09 - September</option>
        <option value="10">10 - October</option>
        <option value="11">11 - November</option>
        <option value="12">12 - December</option>
      </select>
    </div>
    <div class="wc-form-group wc-form-group--year">
      <label class="wc-label" for="date_of_birth_year">Year</label>
      <input class="wc-input" aria-describedby="mdHint" id="date_of_birth_year" name="date_of_birth_year"
        minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric" value="" 
        {% if disabled_state == 'disabled' %} disabled
        {% elseif disabled_state == 'aria-disabled' %} aria-disabled="true" {%- endif %}
      />
    </div>
  </div>
</fieldset>
