import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function MeshTemplate({ mesh }) {
  const [modifyMeshUUID, changeFocusedMeshUUID] = useStore(
    (state) => [state.modifyMeshUUID, state.changeFocusedMeshUUID],
    shallow,
  )
  const MeshComponent = mesh.component
  const meshComponentRef = useRef(null)

  // Set the mesh uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    modifyMeshUUID(mesh, meshComponentRef?.current?.uuid)
  }, [])

  return (
    <MeshComponent
      {...mesh.args}
      ref={meshComponentRef}
      material-color={mesh.material['material-color']}
      onClick={(e) => {
        changeFocusedMeshUUID(e.object.uuid)
      }}
    />
  )
}

MeshTemplate.propTypes = {
  mesh: PropTypes.object.isRequired,
}
