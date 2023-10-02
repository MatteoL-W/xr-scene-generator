import PropTypes from 'prop-types'
import useSceneStore from '../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { argumentsDefaultParameters } from '../../data/argumentsDefaultParameters.js'

DefaultInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}

export function DefaultInput({ label, value }) {
  const [modifyFocusedMeshArguments] = useSceneStore(
    (state) => [state.modifyFocusedMeshArguments],
    shallow,
  )

  function onChange(event) {
    // Should we add a debouncer ?
    modifyFocusedMeshArguments({
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
        min={argumentsDefaultParameters?.[label]?.min ?? undefined}
        max={argumentsDefaultParameters?.[label]?.max ?? undefined}
        step={argumentsDefaultParameters?.[label]?.step ?? undefined}
      />
    </>
  )
}
