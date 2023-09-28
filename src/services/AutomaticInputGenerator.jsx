import PropTypes from 'prop-types'
import { isHexColor } from '../utils/typesTest.jsx'
import { hexColorValidator } from '../utils/typesValidator.jsx'

export default function AutomaticInputGenerator({ label, value, onChange }) {
  if (isHexColor(value))
    return <ColorPickerInput label={label} value={value} onChange={onChange} />
}

AutomaticInputGenerator.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
}

function ColorPickerInput({ label, value, onChange }) {
  return <input type='color' name={label} value={value} onChange={onChange} />
}

ColorPickerInput.propTypes = {
  label: PropTypes.string,
  value: hexColorValidator,
  onChange: PropTypes.func,
}
