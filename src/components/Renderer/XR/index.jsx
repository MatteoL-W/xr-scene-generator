import { Controllers, Hands } from '@react-three/xr'
import { useThree } from '@react-three/fiber'
import { Texture } from 'three'

export default function XRSpecificControls() {
  const { scene } = useThree()
  const envMapDataTexture = scene.background

  let envMap
  if (envMapDataTexture) envMap = new Texture(envMapDataTexture.image)

  return (
    <>
      <Controllers envMap={envMap} />
      <Hands />
    </>
  )
}
