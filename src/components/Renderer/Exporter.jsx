import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import useStore from '@/store/index.jsx'
import { downloadStringBasedFile } from '@/utils/userDownload.js'

export default function Exporter() {
  const [isWaitingToDownloadGLTF, stopWaitingToDownloadGLTF] = useStore(
    (state) => [state.isWaitingToDownloadGLTF, state.stopWaitingToDownloadGLTF],
  )
  const { scene } = useThree()
  const exporter = useMemo(() => new GLTFExporter(), [])

  if (isWaitingToDownloadGLTF) {
    downloadSceneObjects(scene, exporter)
    stopWaitingToDownloadGLTF()
  }

  return <></>
}

function downloadSceneObjects(scene, exporter) {
  const exportedObject = scene.getObjectByName('SceneObjectsComponent')

  exporter.parse(
    exportedObject,
    function (gltf) {
      const output = JSON.stringify(gltf, null, 2)
      downloadStringBasedFile('scene.gltf', output)
    },
    function (error) {
      console.log('An error happened', error)
    },
  )
}
