import PropTypes from 'prop-types'
import { isHexColor, isVec } from '../utils/typesTest.jsx'
import { hexColorValidator } from '../utils/typesValidator.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

GenerateAutomaticInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  scenePiece: PropTypes.object.isRequired,
}

export default function GenerateAutomaticInput({ label, value, scenePiece }) {
  const args = {
    label: label,
    value: value,
    scenePiece: scenePiece,
  }

  if (isHexColor(value)) return <ColorPickerInput {...args} />
  else if (isVec(value)) return <VectorInput {...args} />
}

ColorPickerInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: hexColorValidator,
  scenePiece: PropTypes.object.isRequired,
}

function ColorPickerInput({ label, value, scenePiece }) {
  const [updateArgsContentFromScene] = useSceneStore(
    (state) => [state.updateArgsContentFromScene],
    shallow,
  )

  function onChange(event) {
    // Should we add a debouncer ?
    updateArgsContentFromScene(scenePiece, {
      [label]: event.target.value,
    })
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type='color' name={label} value={value} onChange={onChange} />
    </>
  )
}

VectorInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  scenePiece: PropTypes.object.isRequired,
}

function VectorInput({ label, value, scenePiece }) {
  const [updateArgsContentFromScene] = useSceneStore(
    (state) => [state.updateArgsContentFromScene],
    shallow,
  )

  function onChange(event) {
    const formId = event.target.attributes['data-input-id'].value
    const updatedValue = [...value]
    updatedValue[formId] = parseFloat(event.target.value)

    updateArgsContentFromScene(scenePiece, {
      [label]: updatedValue,
    })
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      {value.map((component, key) => {
        return (
          <input
            type='number'
            value={component}
            key={`${label}_${key}`}
            data-input-id={key}
            onChange={onChange}
          />
        )
      })}
    </>
  )
}
