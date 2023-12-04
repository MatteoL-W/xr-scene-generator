import { Loader as LoaderDrei } from '@react-three/drei'

export default function Loader() {
  const containerStyle = { width: '100%', height: '100%' }
  return <LoaderDrei containerStyles={containerStyle} />
}
