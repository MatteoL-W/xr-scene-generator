import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const BigTori = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/tori_big-transformed.glb',
  )
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder002_0.geometry}
        material={materials.japanbuilding13}
      />
      <mesh
        geometry={nodes.Cylinder002_1.geometry}
        material={materials.hause_japan16}
      />
      <mesh
        geometry={nodes.Cylinder002_2.geometry}
        material={materials.japanbuilding12}
      />
    </group>
  )
})

useGLTF.preload('/xr-scene-generator/models/tori_big-transformed.glb')

BigTori.displayName = 'BigTori'
