import { useRef } from 'react'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Draggable({ children, mesh }) {
  const groupRef = useRef()
  const [focusedMeshUUID, transformControlsRef] = useSceneStore(
    (state) => [state.focusedMeshUUID, state.transformControlsRef],
    shallow,
  )

  // Change the target of transform controls
  if (focusedMeshUUID === mesh.uuid)
    transformControlsRef.current.object = groupRef.current

  return (
    <group ref={groupRef} name='DraggableComponent'>
      {children}
    </group>
  )
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  mesh: PropTypes.object.isRequired,
}
