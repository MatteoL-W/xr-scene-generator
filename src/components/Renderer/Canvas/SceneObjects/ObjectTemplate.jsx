import { useRef } from 'react'
import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import useSyncThreeAndInternal from './useSyncThreeAndInternal.jsx'
import getObjectComponent from './getObjectComponent.js'
import MeshWrapper from './MeshWrapper/index.jsx'
import LightWrapper from './LightWrapper/index.jsx'

ObjectTemplate.propTypes = {
  object: PropTypes.object.isRequired,
}

export default function ObjectTemplate({ object }) {
  const [changeFocusedObjectByUUID] = useStore((state) => [
    state.changeFocusedObjectByUUID,
  ])

  const objectComponentRef = useRef(null)
  useSyncThreeAndInternal(object, objectComponentRef)

  const ObjectComponent = getObjectComponent(object.component)
  const ObjectTypeWrapper = {
    mesh: MeshWrapper,
    light: LightWrapper,
  }[object.type]

  return (
    <ObjectTypeWrapper object={object} objectRef={objectComponentRef}>
      <ObjectComponent
        ref={objectComponentRef}
        {...object.args}
        {...object.material}
        {...object.parameters}
        {...object.transformations}
        onClick={() => changeFocusedObjectByUUID(object.uuid)}
      />
    </ObjectTypeWrapper>
  )
}
