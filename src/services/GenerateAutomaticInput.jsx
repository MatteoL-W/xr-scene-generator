import PropTypes from 'prop-types'
import { isHexColor } from '@/utils/typesTest.jsx'
import { ColorPickerInput } from './InputTemplates/ColorPickerInput.jsx'
import { DefaultInput } from './InputTemplates/DefaultInput.jsx'
import { ArrayInputs } from './InputTemplates/ArrayInputs.jsx'
import BooleanInput from './InputTemplates/BooleanInput.jsx'

GenerateAutomaticInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any.isRequired,
  repository: PropTypes.string,
}

/**
 * This component is used to generate the correct input for the property
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function GenerateAutomaticInput(props) {
  if (Array.isArray(props.propertyValue)) {
    return <ArrayInputs {...props} />
  } else if (isHexColor(props.propertyValue)) {
    return <ColorPickerInput {...props} />
  } else if (typeof props.propertyValue === 'boolean')
    return <BooleanInput {...props} />
  else return <DefaultInput {...props} />
}
