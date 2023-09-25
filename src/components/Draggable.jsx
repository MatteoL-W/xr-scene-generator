import { useEffect, useRef } from 'react'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { useThree } from '@react-three/fiber'
import PropTypes from 'prop-types'

export default function Draggable({ children, orbitControls, meshArgs }) {
  const ref = useRef(null)
  const { camera, gl, scene } = useThree()

  useEffect(() => {
    const controls = new DragControls(
      ref.current.children,
      camera,
      gl.domElement,
    )
    controls.transformGroup = true

    controls.addEventListener('dragstart', () => {
      orbitControls.enabled = false
    })
    controls.addEventListener('dragend', (event) => {
      orbitControls.enabled = true
      meshArgs.position = event.object.position
    })
  }, [camera, gl.domElement, scene, orbitControls, meshArgs])

  return <group ref={ref}>{children}</group>
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  orbitControls: PropTypes.object.isRequired,
  meshArgs: PropTypes.object.isRequired,
}
