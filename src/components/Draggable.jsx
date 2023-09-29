import { useEffect, useRef } from 'react'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { useThree } from '@react-three/fiber'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

// ToDo: orbitControls in store
export default function Draggable({ children, orbitControls, mesh }) {
  const [modifyMeshArguments] = useSceneStore(
    (state) => [state.modifyMeshArguments],
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
      orbitControls.enabled = false
    })
    controls.addEventListener('dragend', (event) => {
      orbitControls.enabled = true
      modifyMeshArguments(mesh, { position: [...event.object.position] })
    })
  }, [camera, gl.domElement, mesh, orbitControls, modifyMeshArguments])

  return <group ref={groupRef}>{children}</group>
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  orbitControls: PropTypes.object.isRequired,
  mesh: PropTypes.object.isRequired,
}
