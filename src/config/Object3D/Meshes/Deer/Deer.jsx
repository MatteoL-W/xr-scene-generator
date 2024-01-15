import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Deer = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Deer.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['09deerFinal'].geometry}
        material={materials['Material.138']}
      />
    </group>
  )
})
Deer.displayName = 'Deer'

useGLTF.preload('/xr-scene-generator/models/Animals/Deer.glb')
