import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const IrregularFirTree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Trees/IrregularFirTree.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree055.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
IrregularFirTree.displayName = 'IrregularFirTree'

useGLTF.preload('/xr-scene-generator/models/Trees/IrregularFirTree.glb')
