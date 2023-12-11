import MeshWrapper from './MeshWrapper/index.jsx'
import LightWrapper from './LightWrapper/index.jsx'

export default function getObjectTypeWrapper(type) {
  const ObjectTypeWrapper = {
    mesh: MeshWrapper,
    light: LightWrapper,
  }[type]

  if (!ObjectTypeWrapper) {
    throw new Error(`No wrapper found for type: ${type}`)
  }

  return ObjectTypeWrapper
}
