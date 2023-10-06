import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Draggable from './Draggable.jsx'

export default function MeshTemplate({ mesh }) {
  const [modifyMeshUuid, changeFocusedMesh] = useSceneStore(
    (state) => [state.modifyMeshUuid, state.changeFocusedMesh],
    shallow,
  )
  const MeshComponent = mesh.component
  const meshComponentRef = useRef(null)

  // Set the mesh uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    modifyMeshUuid(mesh, meshComponentRef?.current?.uuid)
  }, [])

  return (
    <Draggable mesh={mesh}>
      <MeshComponent
        material-color={mesh.args['material-color']}
        ref={meshComponentRef}
        onClick={(e) => {
          changeFocusedMesh(e.object.uuid)
        }}
      />
    </Draggable>
  )
}

MeshTemplate.propTypes = {
  mesh: PropTypes.object.isRequired,
}
