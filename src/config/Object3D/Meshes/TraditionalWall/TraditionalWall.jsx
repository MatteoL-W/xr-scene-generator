import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const TraditionalWall = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Constructions/TraditionalWall.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.BuildingA_Wall_Straight.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
TraditionalWall.displayName = 'TraditionalWall'

useGLTF.preload('/xr-scene-generator/models/Constructions/TraditionalWall.glb')
