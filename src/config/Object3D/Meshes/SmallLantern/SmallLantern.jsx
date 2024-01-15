import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const SmallLantern = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    '/xr-scene-generator/models/Decorations/SmallLantern.glb',
  )
  forwardPropsToGLTFChildren(ref, props)

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Lantern_3.geometry}
        material={materials.MainMaterial}
      />
    </group>
  )
})
SmallLantern.displayName = 'SmallLantern'

useGLTF.preload('/xr-scene-generator/models/Decorations/SmallLantern.glb')
