import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const ShrineStatue = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/ShrineStatue.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Shrine_Statue_2.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
ShrineStatue.displayName = 'ShrineStatue'

useGLTF.preload('/xr-scene-generator/models/Decorations/ShrineStatue.glb')
