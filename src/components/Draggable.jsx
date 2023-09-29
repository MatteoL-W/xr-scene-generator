import { useEffect, useRef } from 'react'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { useThree } from '@react-three/fiber'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Draggable({ children, mesh }) {
  const [modifyMeshArguments, orbitControlsRef] = useSceneStore(
    (state) => [state.modifyMeshArguments, state.orbitControlsRef],
    shallow,
  )
  const { camera, gl } = useThree()
  const groupRef = useRef(null)

  useEffect(() => {
    const controls = new DragControls(
      groupRef.current.children,
      camera,
      gl.domElement,
    )

    controls.transformGroup = true
    controls.addEventListener('dragstart', () => {
      orbitControlsRef.current.enabled = false
    })
    controls.addEventListener('dragend', (event) => {
      orbitControlsRef.current.enabled = true
      modifyMeshArguments(mesh, { position: [...event.object.position] })
    })
  }, [camera, gl.domElement, mesh, modifyMeshArguments, orbitControlsRef])

  return <group ref={groupRef}>{children}</group>
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  mesh: PropTypes.object.isRequired,
}
