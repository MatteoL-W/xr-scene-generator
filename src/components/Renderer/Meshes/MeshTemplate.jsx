import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useSceneStore from '../../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Draggable from './Draggable.jsx'

export default function MeshTemplate({ mesh }) {
  const [modifyMeshUUID, changeFocusedMesh] = useSceneStore(
    (state) => [state.modifyMeshUUID, state.changeFocusedMesh],
    shallow,
  )
  const MeshComponent = mesh.component
  const meshComponentRef = useRef(null)

  // Set the mesh uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    modifyMeshUUID(mesh, meshComponentRef?.current?.uuid)
  }, [])

  return (
    <Draggable mesh={mesh}>
      <MeshComponent
        ref={meshComponentRef}
        material-color={mesh.args['material-color']}
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
