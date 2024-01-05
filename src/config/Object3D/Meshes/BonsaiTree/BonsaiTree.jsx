import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const BonsaiTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/BonsaiTree.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Tree005.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
BonsaiTree.displayName = 'BonsaiTree'

useGLTF.preload('/xr-scene-generator/models/BonsaiTree.glb')
