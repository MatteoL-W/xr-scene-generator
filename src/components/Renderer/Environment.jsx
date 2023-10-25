import { Environment as EnvironmentR3F } from '@react-three/drei'

export default function Environment() {
  return (
    <EnvironmentR3F
      preset='park'
      background={true}
      ground={{
        height: 15, // Height of the camera that was used to create the env map (Default: 15)
        radius: 60, // Radius of the world. (Default 60)
        scale: 100, // Scale of the backside projected sphere that holds the env texture (Default: 100)
      }}
    />
  )
}
