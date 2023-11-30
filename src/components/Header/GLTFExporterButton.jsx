import useStore from '@/store/index.jsx'

export default function GLTFExporterButton() {
  const [startWaitingToDownloadGLTF] = useStore((state) => [
    state.startWaitingToDownloadGLTF,
  ])

  return <span onClick={() => startWaitingToDownloadGLTF()}>Download GLTF</span>
}
