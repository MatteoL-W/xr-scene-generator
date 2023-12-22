import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const forwardedProps = ['receiveShadow', 'castShadow']
useGLTF.preload('/xr-scene-generator/models/tori_big-transformed.glb')

export const BigTori = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/tori_big-transformed.glb',
  )

  const group = ref.current

  group?.traverse((node) => {
    forwardedProps.map((prop) => {
      if (props?.[prop] !== null) node[prop] = props[prop]
    })
  })

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
BigTori.displayName = 'BigTori'
