import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const TraditionalWallPortal = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Constructions/TraditionalWallPortal.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.BuildingA_GateA.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
TraditionalWallPortal.displayName = 'TraditionalWallPortal'

useGLTF.preload(
  '/xr-scene-generator/models/Constructions/TraditionalWallPortal.glb',
)
