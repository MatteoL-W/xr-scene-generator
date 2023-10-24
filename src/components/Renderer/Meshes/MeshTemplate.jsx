import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import getMeshComponent from '@/utils/getMeshComponents.js'

export default function MeshTemplate({ mesh }) {
  const [modifyMeshUUID, changeFocusedMeshUUID] = useStore((state) => [
    state.modifyMeshUUID,
    state.changeFocusedMeshUUID,
  ])
  const MeshComponent = getMeshComponent(mesh.component)
  const meshComponentRef = useRef(null)

  // Set the mesh uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    modifyMeshUUID(mesh, meshComponentRef?.current?.uuid)
  }, [])

  return (
    <MeshComponent
      {...mesh.args}
      {...mesh.material}
      {...mesh.transformations}
      ref={meshComponentRef}
      onClick={(e) => {
        changeFocusedMeshUUID(e.object.uuid)
      }}
    />
  )
}

MeshTemplate.propTypes = {
  mesh: PropTypes.object.isRequired,
}
