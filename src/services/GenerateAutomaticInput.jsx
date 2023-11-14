import PropTypes from 'prop-types'
import { ColorPickerInput } from './InputTemplates/ColorPickerInput.jsx'
import { DefaultInput } from './InputTemplates/DefaultInput.jsx'
import { isHexColor } from '@/utils/typesTest.jsx'
import { ArrayInputs } from '@/services/InputTemplates/ArrayInputs.jsx'
import BooleanInput from '@/services/InputTemplates/BooleanInput.jsx'

GenerateAutomaticInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any.isRequired,
  repository: PropTypes.string,
}

export default function GenerateAutomaticInput(props) {
  if (Array.isArray(props.propertyValue)) {
    return <ArrayInputs {...props} />
  } else if (isHexColor(props.propertyValue)) {
    return <ColorPickerInput {...props} />
  } else if (typeof props.propertyValue === 'boolean')
    return <BooleanInput {...props} />
  else return <DefaultInput {...props} />
}
