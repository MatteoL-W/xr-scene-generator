import { Fragment, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { getObjectComponent } from '@/utils/getComponents.js'
import LightWrapper from './LightWrapper.jsx'
import MeshWrapper from './MeshWrapper.jsx'

export default function ObjectTemplate({ object }) {
  const [modifyObjectUUID, changeFocusedObjectUUID] = useStore((state) => [
    state.modifyObjectUUID,
    state.changeFocusedObjectUUID,
  ])
  const ObjectComponent = useMemo(
    () => getObjectComponent(object.component),
    [object.component],
  )
  const objectComponentRef = useRef(null)

  // Set the object uuid the same as R3F Object uuid (do not add more dependencies)
  useEffect(() => {
    if (!object.isImported) {
      modifyObjectUUID(object, objectComponentRef?.current?.uuid)
    }
  }, [])

  const ObjectTypeWrapper =
    {
      mesh: MeshWrapper,
      light: LightWrapper,
    }[object.type] || Fragment

  return (
    <ObjectTypeWrapper object={object} objectRef={objectComponentRef}>
      <ObjectComponent
        {...object.args}
        {...object.material}
        {...object.parameters}
        {...object.transformations}
        ref={objectComponentRef}
        onClick={(e) => {
          changeFocusedObjectUUID(e.object.uuid)
        }}
      />
    </ObjectTypeWrapper>
  )
}

ObjectTemplate.propTypes = {
  object: PropTypes.object.isRequired,
}
