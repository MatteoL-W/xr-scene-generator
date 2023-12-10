import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import useStore from '@/store/index.jsx'
import { generateGroupFromGLTF } from '@/utils/importedMeshGeneration.js'

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

    gltf.scene.children.map((children) => {
      scene.add(children)
      addObjectToScene(generateGroupFromGLTF(children.uuid))
    })
  }

  const onError = (error) => {
    URL.revokeObjectURL(importedMeshUrl)
    console.log('An error happened', error)
  }

  importer.load(importedMeshUrl, onLoad, null, onError)
  resetImportedMeshUrl()

  return <></>
}
