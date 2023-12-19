import { Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import { useThree } from '@react-three/fiber'
import { Texture } from 'three'

export default function XRControls() {
  const { scene } = useThree()
  const envMapDataTexture = scene.background

  let envMap
  if (envMapDataTexture) envMap = new Texture(envMapDataTexture.image)

  return (
    <>
      <TeleportationPlane
        leftHand={true}
        rightHand={false}
        maxDistance={10}
        size={0.25}
      />
      <Controllers envMap={envMap} />
      <Hands />
    </>
  )
}
