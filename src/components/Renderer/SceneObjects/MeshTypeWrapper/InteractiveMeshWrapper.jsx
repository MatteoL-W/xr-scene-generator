import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'
import { Matrix4 } from 'three'
import { useMemo, useRef } from 'react'
import { Interactive } from '@react-three/xr'

InteractiveMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  meshWrapperRef: PropTypes.object.isRequired,
}

export default function InteractiveMeshWrapper({ children, meshWrapperRef }) {
  const previousTransform = useMemo(() => new Matrix4(), [])
  const grabbingController = useRef()

  useFrame(() => {
    const controller = grabbingController.current
    if (!controller) return

    const interactiveObject = meshWrapperRef.current
    interactiveObject.applyMatrix4(previousTransform)
    interactiveObject.applyMatrix4(controller.matrixWorld)
    interactiveObject.updateMatrixWorld()

    previousTransform.copy(controller.matrixWorld).invert()
  })

  return (
    <Interactive
      name='MeshInteractiveComponent'
      onSelectStart={(e) => {
        grabbingController.current = e.target.controller
        previousTransform.copy(e.target.controller.matrixWorld).invert()
      }}
      onSelectEnd={(e) => {
        if (e.target.controller === grabbingController.current) {
          grabbingController.current = undefined
        }
      }}
    >
      {children}
    </Interactive>
  )
}
