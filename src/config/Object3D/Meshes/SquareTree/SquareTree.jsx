import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

export const SquareTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/SquareTree.glb',
  )
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
SquareTree.displayName = 'SquareTree'

useGLTF.preload('/xr-scene-generator/models/SquareTree.glb')
