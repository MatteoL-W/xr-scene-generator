import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const PinkFlower = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/PinkFlower.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree064.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
PinkFlower.displayName = 'PinkFlower'

useGLTF.preload('/xr-scene-generator/models/Vegetations/PinkFlower.glb')
