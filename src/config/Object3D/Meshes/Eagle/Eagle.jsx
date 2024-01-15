import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'
import { forwardRef } from 'react'

export const Eagle = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Animals/Eagle.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['24birdFinal'].geometry}
        material={materials['Material.091']}
      />
    </group>
  )
})
Eagle.displayName = 'Eagle'

useGLTF.preload('/xr-scene-generator/models/Animals/Eagle.glb')
