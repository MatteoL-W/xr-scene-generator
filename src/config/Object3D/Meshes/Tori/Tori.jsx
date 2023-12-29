import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

useGLTF.preload('/xr-scene-generator/models/tori.glb')

export const Tori = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/xr-scene-generator/models/tori.glb')
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder_0.geometry}
        material={materials.japanbuilding13}
      />
      <mesh
        geometry={nodes.Cylinder_1.geometry}
        material={materials.hause_japan16}
      />
      <mesh
        geometry={nodes.Cylinder_2.geometry}
        material={materials.japanbuilding17}
      />
    </group>
  )
})
Tori.displayName = 'Tori'
