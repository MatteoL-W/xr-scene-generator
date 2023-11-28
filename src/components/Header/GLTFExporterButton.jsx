import useStore from '@/store/index.jsx'

export default function GLTFExporterButton() {
  const [setIsWaitingToDownloadGLTF] = useStore((state) => [
    state.setIsWaitingToDownloadGLTF,
  ])

  return <span onClick={() => setIsWaitingToDownloadGLTF()}>Download GLTF</span>
}
