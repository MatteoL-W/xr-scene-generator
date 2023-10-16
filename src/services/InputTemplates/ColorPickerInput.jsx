import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import PropTypes from 'prop-types'
import { hexColorValidator } from '../../utils/typesValidator.jsx'

ColorPickerInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: hexColorValidator,
}

export function ColorPickerInput({ propertyLabel, propertyValue }) {
  const [modifyFocusedMeshMaterial] = useStore(
    (state) => [state.modifyFocusedMeshMaterial],
    shallow,
  )

  function handleOnChange(event) {
    modifyFocusedMeshMaterial({
      [propertyLabel]: event.target.value,
    })
  }

  return (
    <>
      <label htmlFor={propertyLabel} className='capitalize'>
        {propertyLabel === 'material-color' ? 'Color' : propertyLabel}
      </label>
      <input
        type='color'
        id={propertyLabel}
        value={propertyValue}
        onChange={handleOnChange}
      />
    </>
  )
}
