import useSceneStore from '../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import PropTypes from 'prop-types'
import { hexColorValidator } from '../../utils/typesValidator.jsx'

ColorPickerInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: hexColorValidator,
}

export function ColorPickerInput({ label, value }) {
  const [modifyFocusedMeshArguments] = useSceneStore(
    (state) => [state.modifyFocusedMeshArguments],
    shallow,
  )

  function handleOnChange(event) {
    // Should we add a debouncer ?
    modifyFocusedMeshArguments({
      [label]: event.target.value,
    })
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type='color' id={label} value={value} onChange={handleOnChange} />
    </>
  )
}
