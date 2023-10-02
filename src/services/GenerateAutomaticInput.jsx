import PropTypes from 'prop-types'
import { ColorPickerInput } from './InputTemplates/ColorPickerInput.jsx'
import { VectorInput } from './InputTemplates/VectorInput.jsx'
import { DefaultInput } from './InputTemplates/DefaultInput.jsx'
import { isHexColor, isVec } from '../utils/typesTest.jsx'

GenerateAutomaticInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}

export default function GenerateAutomaticInput({ label, value }) {
  const args = {
    label: label,
    value: value,
  }

  if (isHexColor(value)) return <ColorPickerInput {...args} />
  else if (isVec(value)) return <VectorInput {...args} />
  else return <DefaultInput {...args} />
}
