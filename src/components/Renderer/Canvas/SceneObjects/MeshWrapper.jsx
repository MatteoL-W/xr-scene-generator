import PropTypes from 'prop-types'
import { useXR } from '@react-three/xr'
import { useRef } from 'react'
import InteractiveMeshWrapper from './MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from './MeshTypeWrapper/PhysicsMeshWrapper.jsx'
import FloatingMeshWrapper from './MeshTypeWrapper/FloatingMeshWrapper.jsx'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function MeshWrapper({ object, objectRef, children }) {
  const meshWrapperRef = useRef()
  const { isPresenting } = useXR()
  const { hasPhysics, hasInteractivity, isFloating } = object.args || {}

  if (!isPresenting) return <>{children}</>

  let wrappedMesh = children

  if (hasInteractivity)
    wrappedMesh = (
      <InteractiveMeshWrapper objectRef={objectRef}>
        {wrappedMesh}
      </InteractiveMeshWrapper>
    )

  if (hasPhysics)
    wrappedMesh = (
      <PhysicsMeshWrapper objectRef={objectRef}>
        {wrappedMesh}
      </PhysicsMeshWrapper>
    )

  if (isFloating)
    wrappedMesh = (
      <FloatingMeshWrapper objectRef={objectRef}>
        {wrappedMesh}
      </FloatingMeshWrapper>
    )

  return <group ref={meshWrapperRef}>{wrappedMesh}</group>
}
