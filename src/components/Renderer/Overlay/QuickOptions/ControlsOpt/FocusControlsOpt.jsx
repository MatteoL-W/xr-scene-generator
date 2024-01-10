import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { TbFocusCentered } from 'react-icons/tb'

export default function FocusControlsOpt({ position }) {
  const [setNewCameraDirectionInstruction] = useStore((state) => [
    state.setNewCameraDirectionInstruction,
  ])

  return (
    <>
      <TbFocusCentered
        className='h-6 w-6 cursor-pointer'
        onClick={() => setNewCameraDirectionInstruction(position)}
      />
    </>
  )
}
FocusControlsOpt.propTypes = {
  position: PropTypes.object,
}
