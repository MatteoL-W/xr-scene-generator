import { useEffect, useRef } from 'react'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { useThree } from '@react-three/fiber'
import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Draggable({ children, orbitControls, mesh }) {
  const [updateArgsContentFromScene] = useSceneStore(
    (state) => [state.updateArgsContentFromScene],
    shallow,
  )
  const { camera, gl } = useThree()
  const ref = useRef(null)

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
      updateArgsContentFromScene(mesh, { position: [...event.object.position] })
    })
  }, [camera, gl.domElement, mesh, orbitControls, updateArgsContentFromScene])

  return <group ref={ref}>{children}</group>
}

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  orbitControls: PropTypes.object.isRequired,
  mesh: PropTypes.object.isRequired,
}
