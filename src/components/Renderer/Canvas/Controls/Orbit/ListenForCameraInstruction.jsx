import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

ListenForCameraInstruction.propTypes = {
  children: PropTypes.node.isRequired,
  orbitControlsRef: PropTypes.object.isRequired,
}

export default function ListenForCameraInstruction({
  children,
  orbitControlsRef,
}) {
  const [
    cameraDirectionInstruction,
    isWaitingForCameraReset,
    stopWaitingForCameraReset,
  ] = useStore(
    useShallow((state) => [
      state.cameraDirectionInstruction,
      state.isWaitingForCameraReset,
      state.stopWaitingForCameraReset,
    ]),
  )

  const control = orbitControlsRef.current

  if (control && cameraDirectionInstruction) {
    control.target = cameraDirectionInstruction
    control.update()
  }

  if (control && isWaitingForCameraReset) {
    stopWaitingForCameraReset()
    control.reset()
    control.update()
  }

  return children
}
