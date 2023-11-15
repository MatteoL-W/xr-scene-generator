import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'
import { Matrix4 } from 'three'
import { useMemo, useRef } from 'react'
import { Interactive } from '@react-three/xr'

InteractiveMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function InteractiveMeshWrapper({ children }) {
  const grabbingController = useRef()
  const groupRef = useRef()
  const previousTransform = useMemo(() => new Matrix4(), [])

  useFrame(() => {
    const controller = grabbingController.current
    const group = groupRef.current
    if (!controller) return

    group.applyMatrix4(previousTransform)
    group.applyMatrix4(controller.matrixWorld)
    group.updateMatrixWorld()

    previousTransform.copy(controller.matrixWorld).invert()
  })

  return (
    <Interactive
      ref={groupRef}
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
