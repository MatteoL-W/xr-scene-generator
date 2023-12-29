import InteractiveMeshWrapper from './MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from './MeshTypeWrapper/PhysicsMeshWrapper.jsx'
import FloatingMeshWrapper from './MeshTypeWrapper/FloatingMeshWrapper.jsx'

const meshWrapperList = {
  hasPhysics: PhysicsMeshWrapper,
  hasInteractivity: InteractiveMeshWrapper,
  isFloating: FloatingMeshWrapper,
}

/**
 * Get mesh wrapper component by object properties
 * @param object
 * @returns {PhysicsMeshWrapper|InteractiveMeshWrapper|FloatingMeshWrapper}
 */
export function getSpecificMeshWrapper(object) {
  // Find the property in {hasPhysics, hasInteractivity, isFloating} that is true
  const activeProperty = Object.keys(meshWrapperList).find(
    (property) => object.args[property],
  )
  return meshWrapperList[activeProperty]
}
