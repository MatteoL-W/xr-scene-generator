import PropTypes from 'prop-types'
import { isHexColor, isVec } from '../utils/typesTest.jsx'
import { hexColorValidator } from '../utils/typesValidator.jsx'
import { argsInfo } from '../data/argsInfo.js'
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
  else return <DefaultInput {...args} />
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
      <input type='color' id={label} value={value} onChange={onChange} />
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
      <label>{label}</label>
      {value.map((component, key) => {
        return (
          <input
            type='number'
            value={component}
            onChange={onChange}
            data-input-id={key}
            key={`${label}_${key}`}
            name={`${label}_${key}`}
            min={argsInfo?.[label]?.min ?? undefined}
            max={argsInfo?.[label]?.max ?? undefined}
            step={argsInfo?.[label]?.step ?? undefined}
          />
        )
      })}
    </>
  )
}

DefaultInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  scenePiece: PropTypes.object.isRequired,
}

function DefaultInput({ label, value, scenePiece }) {
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
      <input
        type='number'
        id={label}
        value={value}
        onChange={onChange}
        min={argsInfo?.[label]?.min ?? undefined}
        max={argsInfo?.[label]?.max ?? undefined}
        step={argsInfo?.[label]?.step ?? undefined}
      />
    </>
  )
}
