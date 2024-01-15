import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const BigLantern = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/BigLantern.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Lantern_1.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
BigLantern.displayName = 'BigLantern'

useGLTF.preload('/xr-scene-generator/models/Decorations/BigLantern.glb')
