import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const FirTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Trees/FirTree.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree088.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
FirTree.displayName = 'FirTree'

useGLTF.preload('/xr-scene-generator/models/Trees/FirTree.glb')
