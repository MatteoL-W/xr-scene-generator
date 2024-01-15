import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const TreeTrunk = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Trees/TreeTrunk.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree075.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
TreeTrunk.displayName = 'TreeTrunk'

useGLTF.preload('/xr-scene-generator/models/Trees/TreeTrunk.glb')
