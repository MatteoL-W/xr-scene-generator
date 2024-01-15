import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const Rock = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/Rock.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree079.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
Rock.displayName = 'Rock'

useGLTF.preload('/xr-scene-generator/models/Vegetations/Rock.glb')
