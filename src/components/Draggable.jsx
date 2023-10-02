import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { DragControls } from 'three/addons/controls/DragControls.js'
import PropTypes from 'prop-types'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Draggable({ children }) {
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

    controls.addEventListener('dragstart', () => {
      orbitControlsRef.current.enabled = false
    })
    controls.addEventListener('dragend', (event) => {
      orbitControlsRef.current.enabled = true
      modifyMeshArguments(event.object.uuid, {
        position: [...event.object.position],
      })
    })
  }, [camera, gl.domElement, modifyMeshArguments, orbitControlsRef])

  return <group ref={groupRef}>{children}</group>
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
}
