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

export default function MeshWrapper({
  object: { args: { hasPhysics, hasInteractivity, isFloating } = {} },
  objectRef,
  children,
}) {
  const { isPresenting } = useXR()
  const meshWrapperRef = useRef()

  if (!isPresenting) return <>{children}</>

  const propertyToWrap = {
    hasPhysics: PhysicsMeshWrapper,
    hasInteractivity: InteractiveMeshWrapper,
    isFloating: FloatingMeshWrapper,
  }

  const property = Object.keys(propertyToWrap).find(
    (property) => ({ hasPhysics, hasInteractivity, isFloating })[property],
  )

  const Wrapper = propertyToWrap[property]

  return (
    <group ref={meshWrapperRef}>
      {Wrapper ? <Wrapper objectRef={objectRef}>{children}</Wrapper> : children}
    </group>
  )
}
