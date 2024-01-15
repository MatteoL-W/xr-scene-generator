import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Bear = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Bear.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['08bearFinal'].geometry}
        material={materials['Material.123']}
      />
    </group>
  )
})
Bear.displayName = 'Bear'

useGLTF.preload('/xr-scene-generator/models/Animals/Bear.glb')
