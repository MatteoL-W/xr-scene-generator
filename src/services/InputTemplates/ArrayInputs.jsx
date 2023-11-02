import PropTypes from 'prop-types'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import { argumentsDefaultParameters } from '@/data/argumentsDefaultParameters.js'
import { BsLink45Deg } from 'react-icons/bs'

ArrayInputs.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.array.isRequired,
  repository: PropTypes.string.isRequired,
}

export function ArrayInputs({ propertyLabel, propertyValue, repository }) {
  const [modifyFocusedObject, transformControlsRef] = useStore((state) => [
    state.modifyFocusedObject,
    state.transformControlsRef,
  ])
  const [hasSyncProperties, setHasSyncPropertiesState] = useState(false)

  function toggleSyncParameters() {
    setHasSyncPropertiesState(!hasSyncProperties)
  }

  // ToDo: Better onChange solution
  function handleOnChange(event, changedAxisNumber) {
    let updatedPropertyValue = [...propertyValue]

    if (!hasSyncProperties) {
      updatedPropertyValue[changedAxisNumber] = parseFloat(event.target.value)
    } else {
      if (updatedPropertyValue[changedAxisNumber] === 0) return

      const newPropertyValue = parseFloat(event.target.value)
      const factor = newPropertyValue / updatedPropertyValue[changedAxisNumber]
      updatedPropertyValue = updatedPropertyValue.map((property) => {
        return property * factor
      })
    }

    modifyFocusedObject(
      {
        [propertyLabel]: updatedPropertyValue,
      },
      repository,
    )
    transformControlsRef.current.object[propertyLabel].set(
      ...updatedPropertyValue,
    )
  }

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

      {propertyValue.map((value, index) => {
        const defaultParameters = {
          min: argumentsDefaultParameters?.[propertyLabel]?.min,
          max: argumentsDefaultParameters?.[propertyLabel]?.max,
          step: argumentsDefaultParameters?.[propertyLabel]?.step,
        }
        const axisValue = value.toFixed(2)
        const inputCodeName = `${propertyLabel}_${index}`

        return (
          <input
            type='number'
            value={axisValue}
            onChange={(e) => handleOnChange(e, index)}
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
