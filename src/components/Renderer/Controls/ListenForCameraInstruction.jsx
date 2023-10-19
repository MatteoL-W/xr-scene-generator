import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'

ListenForCameraInstruction.propTypes = {
  children: PropTypes.node.isRequired,
  orbitControlsRef: PropTypes.object.isRequired,
}

export default function ListenForCameraInstruction({
  children,
  orbitControlsRef,
}) {
  const [cameraDirectionInstruction] = useStore(
    (state) => [state.cameraDirectionInstruction],
    shallow,
  )

  if (orbitControlsRef?.current) {
    orbitControlsRef.current.target = cameraDirectionInstruction
    orbitControlsRef.current.update()
  }

  return <>{children}</>
}
