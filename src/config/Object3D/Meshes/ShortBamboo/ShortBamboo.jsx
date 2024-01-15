import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const ShortBamboo = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/ShortBamboo.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Bamboo_2A.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
ShortBamboo.displayName = 'ShortBamboo'

useGLTF.preload('/xr-scene-generator/models/Vegetations/ShortBamboo.glb')
