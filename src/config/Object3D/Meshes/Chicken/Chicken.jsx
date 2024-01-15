import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Chicken = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Chicken.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['21chikenFinal'].geometry}
        material={materials['Material.128']}
      />
    </group>
  )
})
Chicken.displayName = 'Chicken'

useGLTF.preload('/xr-scene-generator/models/Animals/Chicken.glb')
