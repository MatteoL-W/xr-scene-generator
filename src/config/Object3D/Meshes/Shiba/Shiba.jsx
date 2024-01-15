import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const Shiba = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Shiba.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['19dogFinal'].geometry}
        material={materials['Material.133']}
      />
    </group>
  )
})
Shiba.displayName = 'Shiba'

useGLTF.preload('/xr-scene-generator/models/Animals/Shiba.glb')
