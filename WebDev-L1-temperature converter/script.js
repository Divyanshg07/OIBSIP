const form = document.querySelector('#converter-form');
const input = document.querySelector('#temperature');
const unitInputs = document.querySelectorAll('input[name="unit"]');
const message = document.querySelector('#validation-message');
const inputUnit = document.querySelector('#input-unit');
const outputs = {
  celsius: document.querySelector('#celsius-result'),
  fahrenheit: document.querySelector('#fahrenheit-result'),
  kelvin: document.querySelector('#kelvin-result')
};

const unitLabels = { celsius: '°C', fahrenheit: '°F', kelvin: 'K' };

function selectedUnit() {
  return document.querySelector('input[name="unit"]:checked').value;
}

function validateTemperature() {
  const rawValue = input.value.trim();
  let error = '';

  if (!rawValue) error = 'Enter a temperature to convert.';
  else if (!/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(rawValue)) error = 'Please enter a valid numeric value.';
  else {
    const value = Number(rawValue);
    const celsius = toCelsius(value, selectedUnit());
    if (celsius < -273.15) error = 'That is below absolute zero. Please enter a higher temperature.';
  }

  input.setCustomValidity(error);
  input.setAttribute('aria-invalid', Boolean(error));
  message.textContent = error;
  return !error;
}

function toCelsius(value, unit) {
  if (unit === 'fahrenheit') return (value - 32) * 5 / 9;
  if (unit === 'kelvin') return value - 273.15;
  return value;
}
 function scrollToBottom() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
   }
function displayNumber(value) {
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(rounded);
}

function convert() {
  if (!validateTemperature()) return;
  const celsius = toCelsius(Number(input.value), selectedUnit());
  outputs.celsius.value = displayNumber(celsius);
  outputs.fahrenheit.value = displayNumber((celsius * 9 / 5) + 32);
  outputs.kelvin.value = displayNumber(celsius + 273.15);
  document.querySelector('#results-title').textContent = 'Your converted values';
}

input.addEventListener('input', validateTemperature);
unitInputs.forEach((unit) => unit.addEventListener('change', () => {
  inputUnit.textContent = unitLabels[selectedUnit()];
  validateTemperature();
}));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  convert();
});
