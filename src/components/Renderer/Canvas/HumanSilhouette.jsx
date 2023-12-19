import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import useStore from '@/store/index.jsx'

export default function HumanSilhouette() {
  const gltf = useGLTF('/models/immersive-helper/human.gltf')
  const [isHumanSilhouetteAppearing] = useStore((state) => [
    state.isHumanSilhouetteAppearing,
  ])

  useEffect(() => {
    gltf.scene.scale.set(1.75, 1.75, 1.75)
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.material.color = '#000000'
        node.material.transparent = true
        node.material.opacity = 0.5
      }
    })
  }, [])

  if (isHumanSilhouetteAppearing) return <primitive object={gltf.scene} />
}
