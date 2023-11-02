import PropTypes from 'prop-types'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import { argumentsDefaultParameters } from '@/data/argumentsDefaultParameters.js'
import { BsLink45Deg } from 'react-icons/bs'

VectorAndEulerInputs.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.object.isRequired,
}

export function VectorAndEulerInputs({ propertyLabel, propertyValue }) {
  const [modifyFocusedObjectTransformations, transformControlsRef] = useStore(
    (state) => [
      state.modifyFocusedObjectTransformations,
      state.transformControlsRef,
    ],
  )
  const [hasSyncProperties, setHasSyncPropertiesState] = useState(false)

  function toggleSyncParameters() {
    setHasSyncPropertiesState(!hasSyncProperties)
  }

  function handleOnChange(event, changedAxisNumber) {
    let updatedPropertyValue = [...propertyValue]

    if (!hasSyncProperties) {
      updatedPropertyValue[changedAxisNumber] = parseFloat(event.target.value)
    } else {
      if (updatedPropertyValue[changedAxisNumber] === 0) return

      const newPropertyValue = parseFloat(event.target.value)
      const factor = newPropertyValue / updatedPropertyValue[changedAxisNumber]
      updatedPropertyValue = updatedPropertyValue.map((property) => {
        return property === 'XYZ' ? 'XYZ' : property * factor // 'XYZ' is for rotation exception
      })
    }

    modifyFocusedObjectTransformations({
      [propertyLabel]: updatedPropertyValue,
    })
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
        <BsLink45Deg
          className={`h-full rounded ${
            hasSyncProperties ? 'bg-white text-jean' : ''
          }`}
          onClick={toggleSyncParameters}
        />
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
            onChange={(e) => handleOnChange(e, axisNumber)}
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
