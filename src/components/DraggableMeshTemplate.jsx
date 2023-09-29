import { useEffect, useRef } from 'react'
import Draggable from './Draggable.jsx'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function DraggableMeshTemplate({ mesh }) {
  const [modifyMeshUuid, changeFocusedMesh] = useSceneStore(
    (state) => [state.modifyMeshUuid, state.changeFocusedMesh],
    shallow,
  )
  const MeshComponent = mesh.component
  const meshComponentRef = useRef(null)

  // Set the mesh uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    modifyMeshUuid(mesh, meshComponentRef?.current?.uuid)
  }, [meshComponentRef])

  return (
    <Draggable mesh={mesh}>
      <MeshComponent
        {...mesh.args}
        ref={meshComponentRef}
        onClick={(e) => {
          changeFocusedMesh(e.object.uuid)
        }}
      />
    </Draggable>
  )
}

DraggableMeshTemplate.propTypes = {
  mesh: PropTypes.object.isRequired,
}
