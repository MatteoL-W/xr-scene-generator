import Draggable from './Draggable.jsx'
import PropTypes from 'prop-types'

export default function SceneObject({ mesh, orbitControls }) {
  const Component = mesh.component
  return (
    <Draggable orbitControls={orbitControls} mesh={mesh}>
      <Component {...mesh.args} />
    </Draggable>
  )
}

SceneObject.propTypes = {
  mesh: PropTypes.object.isRequired,
  orbitControls: PropTypes.object.isRequired,
}
