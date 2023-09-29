import { useEffect, useRef } from 'react'
import Draggable from './Draggable.jsx'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function SceneObject({ mesh, orbitControls }) {
  const Component = mesh.component
  const componentRef = useRef(null)
  const [updateUuidContentOfPiece, modifySelectedContent] = useSceneStore(
    (state) => [state.updateUuidContentOfPiece, state.modifySelectedContent],
    shallow,
  )

  useEffect(() => {
    updateUuidContentOfPiece(mesh, componentRef?.current?.uuid)
  }, [componentRef])

  return (
    <Draggable orbitControls={orbitControls} mesh={mesh}>
      <Component
        ref={componentRef}
        {...mesh.args}
        onClick={(e) => {
          modifySelectedContent(e.object.uuid)
        }}
      />
    </Draggable>
  )
}

SceneObject.propTypes = {
  mesh: PropTypes.object.isRequired,
  orbitControls: PropTypes.object.isRequired,
}
