import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

ListenForCameraInstruction.propTypes = {
  orbitControlsRef: PropTypes.object.isRequired,
}

export default function ListenForCameraInstruction({ orbitControlsRef }) {
  const [cameraDirectionInstruction] = useStore(
    useShallow((state) => [state.cameraDirectionInstruction]),
  )

  const control = orbitControlsRef.current

  if (control && cameraDirectionInstruction) {
    control.target = cameraDirectionInstruction
    control.update()
  }
}
