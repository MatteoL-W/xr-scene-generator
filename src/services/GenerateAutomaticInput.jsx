import PropTypes from 'prop-types'
import { ColorPickerInput } from './InputTemplates/ColorPickerInput.jsx'
import { DefaultInput } from './InputTemplates/DefaultInput.jsx'
import { isHexColor } from '../utils/typesTest.jsx'
import { VectorAndEulerInput } from './InputTemplates/VectorAndEulerInput.jsx'

GenerateAutomaticInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any.isRequired,
}

export default function GenerateAutomaticInput(props) {
  if (
    props.propertyValue?.isVector2 ||
    props.propertyValue?.isVector3 ||
    props.propertyValue?.isEuler
  ) {
    return <VectorAndEulerInput {...props} />
  } else if (isHexColor(props.propertyValue)) {
    return <ColorPickerInput {...props} />
  } else return <DefaultInput {...props} />
}
