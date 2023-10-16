import PropTypes from 'prop-types'
import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { argumentsDefaultParameters } from '../../data/argumentsDefaultParameters.js'

DefaultInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any,
}

export function DefaultInput({ propertyLabel, propertyValue }) {
  const [modifyFocusedMeshTransformations] = useStore(
    (state) => [state.modifyFocusedMeshTransformations],
    shallow,
  )

  function handleOnChange(event) {
    modifyFocusedMeshTransformations({
      [propertyLabel]: event.target.value,
    })
  }

  const defaultArguments = {
    min: argumentsDefaultParameters?.[propertyLabel]?.min ?? undefined,
    max: argumentsDefaultParameters?.[propertyLabel]?.max ?? undefined,
    step: argumentsDefaultParameters?.[propertyLabel]?.step ?? undefined,
  }

  return (
    <>
      <label htmlFor={propertyLabel}>{propertyLabel}</label>
      <input
        type='number'
        id={propertyLabel}
        value={propertyValue}
        onChange={handleOnChange}
        {...defaultArguments}
      />
    </>
  )
}
