import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const TraditionalWallCorner = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Constructions/TraditionalWallCorner.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.BuildingA_Wall_Curve.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
TraditionalWallCorner.displayName = 'TraditionalWallCorner'

useGLTF.preload(
  '/xr-scene-generator/models/Constructions/TraditionalWallCorner.glb',
)
