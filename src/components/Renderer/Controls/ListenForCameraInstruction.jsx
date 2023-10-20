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
  const [cameraDirectionInstruction] = useStore(
    useShallow((state) => [state.cameraDirectionInstruction]),
  )

  if (orbitControlsRef?.current) {
    orbitControlsRef.current.target = cameraDirectionInstruction
    orbitControlsRef.current.update()
  }

  return <>{children}</>
}
