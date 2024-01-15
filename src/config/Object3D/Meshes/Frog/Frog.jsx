import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Frog = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Frog.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['11frogFinal'].geometry}
        material={materials['Material.127']}
      />
    </group>
  )
})
Frog.displayName = 'Frog'

useGLTF.preload('/xr-scene-generator/models/Animals/Frog.glb')
