import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const ArcCircleTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Trees/ArcCircleTree.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree002.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
ArcCircleTree.displayName = 'ArcCircleTree'

useGLTF.preload('/xr-scene-generator/models/Trees/ArcCircleTree.glb')
