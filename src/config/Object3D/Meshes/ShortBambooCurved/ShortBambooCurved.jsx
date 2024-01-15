import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const ShortBambooCurved = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Vegetations/ShortBambooCurved.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Bamboo_2E.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
ShortBambooCurved.displayName = 'ShortBambooCurved'

useGLTF.preload('/xr-scene-generator/models/Vegetations/ShortBambooCurved.glb')
