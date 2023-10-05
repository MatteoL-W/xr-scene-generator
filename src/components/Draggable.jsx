import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { PivotControls } from '@react-three/drei'
import { Euler, Quaternion, Vector3 } from 'three'
import useThreeObject from '../hooks/useThreeObject.jsx'
import buildMatrixArguments from '../services/buildMatrixArgument.js'

export default function Draggable({ children, mesh }) {
  const [modifyMeshArguments, orbitControlsRef] = useSceneStore(
    (state) => [state.modifyMeshArguments, state.orbitControlsRef],
    shallow,
  )
  const meshThreeObject = useThreeObject(mesh.uuid)

  function handleDragStart() {
    orbitControlsRef.current.enabled = false
  }

  function handleDragEnd() {
    orbitControlsRef.current.enabled = true

    const position = new Vector3()
    const quaternion = new Quaternion()
    const scale = new Vector3()

    meshThreeObject.matrixWorld.decompose(position, quaternion, scale)
    const euler = new Euler().setFromQuaternion(quaternion)

    modifyMeshArguments(mesh.uuid, {
      position: [...position],
      scale: [...scale],
      rotation: [euler.x, euler.y, euler.z],
    })
  }

  const matrix = buildMatrixArguments(
    mesh.args.position,
    mesh.args.rotation,
    mesh.args.scale,
  )

  return (
    <PivotControls
      scale={Math.max(...mesh.args.scale)}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      matrix={matrix}
    >
      {children}
    </PivotControls>
  )
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  mesh: PropTypes.object.isRequired,
}
