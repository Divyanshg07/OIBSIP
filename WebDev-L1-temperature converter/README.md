# Temperature Converter

A clean, responsive web tool for converting temperatures between Celsius, Fahrenheit, and Kelvin. It is built with plain HTML, CSS, and JavaScript—no frameworks or build tools required.

## Features

- Enter a temperature using decimal or negative values
- Choose the input scale: Celsius, Fahrenheit, or Kelvin
- Convert to all three temperature scales at once
- Live validation for blank and non-numeric values
- Friendly absolute-zero validation for physically impossible temperatures
- Responsive, keyboard-accessible interface with labelled controls and live status messages

## Conversion formulas

| Conversion | Formula |
| --- | --- |
| Celsius to Fahrenheit | `(°C × 9 / 5) + 32` |
| Fahrenheit to Celsius | `(°F − 32) × 5 / 9` |
| Celsius to Kelvin | `°C + 273.15` |
| Kelvin to Celsius | `K − 273.15` |

The app converts the selected input to Celsius first, then derives the Fahrenheit and Kelvin values. Results are rounded to two decimal places when needed.

## Validation rules

- The field must contain a valid number.
- Values below absolute zero are rejected:
  - Below `−273.15 °C`
  - Below `−459.67 °F`
  - Below `0 K`

## Run locally

 Open `index.html` directly in a modern browser, or start a local server:
 

## Project structure

```text
index.html   Application structure and form controls
styles.css   Responsive layout, colours, and UI states
script.js    Conversion and live validation logic
README.md    Project documentation
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Example

Entering `100` with Celsius selected returns:

- `100 °C`
- `212 °F`
- `373.15 K`
