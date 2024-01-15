import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const WhiteLantern = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/WhiteLantern.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.MainMaterial}
      />
      <mesh
        geometry={nodes.Cube010_1.geometry}
        material={materials.EmmisionMaterial}
      />
    </group>
  )
})
WhiteLantern.displayName = 'WhiteLantern'

useGLTF.preload('/xr-scene-generator/models/Decorations/WhiteLantern.glb')
