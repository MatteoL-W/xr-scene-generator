import PropTypes from 'prop-types'
import useSceneStore from '../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { argumentsDefaultParameters } from '../../data/argumentsDefaultParameters.js'

VectorInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export function VectorInput({ label, value }) {
  const [modifyFocusedMeshArguments] = useSceneStore(
    (state) => [state.modifyFocusedMeshArguments],
    shallow,
  )

  function onChange(event) {
    const formId = event.target.attributes['data-input-id'].value
    const updatedValue = [...value]
    updatedValue[formId] = parseFloat(event.target.value)

    modifyFocusedMeshArguments({
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
            value={component.toFixed(2)}
            onChange={onChange}
            data-input-id={key}
            key={`${label}_${key}`}
            name={`${label}_${key}`}
            min={argumentsDefaultParameters?.[label]?.min ?? undefined}
            max={argumentsDefaultParameters?.[label]?.max ?? undefined}
            step={argumentsDefaultParameters?.[label]?.step ?? undefined}
          />
        )
      })}
    </>
  )
}
