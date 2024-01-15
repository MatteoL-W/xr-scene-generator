import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Fox = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Fox.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['01foxFinal'].geometry}
        material={materials['Material.092']}
      />
    </group>
  )
})
Fox.displayName = 'Fox'

useGLTF.preload('/xr-scene-generator/models/Animals/Fox.glb')
