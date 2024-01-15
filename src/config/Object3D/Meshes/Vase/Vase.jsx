import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const Vase = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/Vase.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Vase_1B.geometry}
        material={materials.MainMaterial}
        scale={2}
      />
    </group>
  )
})
Vase.displayName = 'Vase'

useGLTF.preload('/xr-scene-generator/models/Decorations/Vase.glb')
