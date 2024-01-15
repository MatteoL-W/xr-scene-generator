import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const Grass = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/Grass.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree054.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
Grass.displayName = 'Grass'

useGLTF.preload('/xr-scene-generator/models/Vegetations/Grass.glb')
