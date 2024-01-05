import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

export const LargeTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/LargeTree.glb',
  )
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree060.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
LargeTree.displayName = 'LargeTree'

useGLTF.preload('/xr-scene-generator/models/LargeTree.glb')
