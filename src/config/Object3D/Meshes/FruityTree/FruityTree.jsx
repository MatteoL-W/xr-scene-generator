import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

export const FruityTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/FruityTree.glb',
  )
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree003.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
FruityTree.displayName = 'FruityTree'

useGLTF.preload('/xr-scene-generator/models/FruityTree.glb')
