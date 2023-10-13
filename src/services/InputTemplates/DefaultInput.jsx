import PropTypes from 'prop-types'
import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { argumentsDefaultParameters } from '../../data/argumentsDefaultParameters.js'

DefaultInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}

export function DefaultInput({ label, value }) {
  const [modifyFocusedMeshArguments] = useStore(
    (state) => [state.modifyFocusedMeshArguments],
    shallow,
  )

  function handleOnChange(event) {
    modifyFocusedMeshArguments({
      [label]: event.target.value,
    })
  }

  const defaultArguments = {
    min: argumentsDefaultParameters?.[label]?.min ?? undefined,
    max: argumentsDefaultParameters?.[label]?.max ?? undefined,
    step: argumentsDefaultParameters?.[label]?.step ?? undefined,
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type='number'
        id={label}
        value={value}
        onChange={handleOnChange}
        {...defaultArguments}
      />
    </>
  )
}
