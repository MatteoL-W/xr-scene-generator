import PropTypes from 'prop-types'
import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { argumentsDefaultParameters } from '../../data/argumentsDefaultParameters.js'
import { BsLink45Deg } from 'react-icons/bs'

VectorAndEulerInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.object.isRequired,
}

export function VectorAndEulerInput({ propertyLabel, propertyValue }) {
  const [modifyFocusedMeshArguments, transformControlsRef] = useStore(
    (state) => [state.modifyFocusedMeshArguments, state.transformControlsRef],
    shallow,
  )

  function handleOnChange(event) {
    const changedAxisNumber = event.target.attributes['data-axis-number'].value
    const updatedPropertyValue = [...propertyValue]
    updatedPropertyValue[changedAxisNumber] = parseFloat(event.target.value)

    modifyFocusedMeshArguments({ [propertyLabel]: updatedPropertyValue })
    transformControlsRef.current.object[propertyLabel].set(
      ...updatedPropertyValue,
    )
  }

  const normalizedObject = {
    x: propertyValue?.x ?? propertyValue?._x,
    y: propertyValue?.y ?? propertyValue?._y,
    z: propertyValue?.z ?? propertyValue?._z,
  }

  if (propertyValue?.z === null || propertyValue?._z === null)
    delete normalizedObject.z

  return (
    <>
      <div className='flex items-center w-20 justify-between'>
        <label className='capitalize'>{propertyLabel}</label>
        <BsLink45Deg className='h-full' />
      </div>

      {Object.keys(normalizedObject).map((axisName, axisNumber) => {
        const defaultParameters = {
          min: argumentsDefaultParameters?.[propertyLabel]?.min,
          max: argumentsDefaultParameters?.[propertyLabel]?.max,
          step: argumentsDefaultParameters?.[propertyLabel]?.step,
        }
        const axisValue = normalizedObject[axisName].toFixed(2)
        const inputCodeName = `${propertyLabel}_${axisNumber}`

        return (
          <input
            type='number'
            value={axisValue}
            onChange={handleOnChange}
            data-axis-number={axisNumber}
            key={inputCodeName}
            name={inputCodeName}
            {...defaultParameters}
            className='w-full px-2 py-1 rounded'
          />
        )
      })}
    </>
  )
}
