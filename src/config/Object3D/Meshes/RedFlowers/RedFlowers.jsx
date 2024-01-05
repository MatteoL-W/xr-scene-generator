import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const RedFlowers = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/RedFlowers.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree073.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
RedFlowers.displayName = 'RedFlowers'

useGLTF.preload('/xr-scene-generator/models/RedFlowers.glb')
