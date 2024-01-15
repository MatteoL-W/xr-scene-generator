import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const HighGrass = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/HighGrass.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree059.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
HighGrass.displayName = 'HighGrass'

useGLTF.preload('/xr-scene-generator/models/Vegetations/HighGrass.glb')
