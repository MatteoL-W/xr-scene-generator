import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const NightFlowers = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/NightFlowers.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tree077.geometry}
        material={materials['Mat_Tree.004']}
      />
    </group>
  )
})
NightFlowers.displayName = 'NightFlowers'

useGLTF.preload('/xr-scene-generator/models/NightFlowers.glb')
