import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const MediumShrineStatue = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/MediumShrineStatue.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Shrine_Statue_5.geometry}
        material={materials.MainMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
    </group>
  )
})
MediumShrineStatue.displayName = 'MediumShrineStatue'

useGLTF.preload('/xr-scene-generator/models/Decorations/MediumShrineStatue.glb')
