import { Box, useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

export const BoxPhong = forwardRef((props, ref) => {
  const componentProps = { ...props }
  const materialColor = props['material-color']
  delete componentProps['material-color']

  return (
    <Box ref={ref} {...componentProps}>
      <meshStandardMaterial color={materialColor} />
    </Box>
  )
})

BoxPhong.displayName = 'BoxPhong'
BoxPhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}

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

BigTori.displayName = 'BigTori'

useGLTF.preload('/xr-scene-generator/models/tori_big-transformed.glb')
