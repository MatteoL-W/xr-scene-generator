import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import useStore from '@/store/index.jsx'
import { generateGroupFromGLTF } from '@/utils/customComponent.js'

export default function Importer() {
  const [importedMeshUrl, resetImportedMeshUrl, addObjectToScene] = useStore(
    (state) => [
      state.importedMeshUrl,
      state.resetImportedMeshUrl,
      state.addObjectToScene,
    ],
  )
  const { scene } = useThree()
  const importer = useMemo(() => new GLTFLoader(), [])

  if (!importedMeshUrl) return

  const onLoad = (gltf) => {
    URL.revokeObjectURL(importedMeshUrl)
    scene.add(gltf.scene) // ToDo: ne pas ajouter directement dans la scène
    addObjectToScene(generateGroupFromGLTF(gltf.scene.uuid))
  }

  const onError = (error) => {
    URL.revokeObjectURL(importedMeshUrl)
    console.log('error', error)
  }

  importer.load(importedMeshUrl, onLoad, null, onError)
  resetImportedMeshUrl()

  return <></>
}
