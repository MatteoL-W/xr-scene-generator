import { isHexColor } from './typesTest.jsx'

export function hexColorValidator(propValue, propName, componentName) {
  if (!isHexColor(propValue.propertyValue)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ` +
        `It must be a valid hexadecimal color string. Value : ${propValue.propertyValue}`,
    )
  }
}
