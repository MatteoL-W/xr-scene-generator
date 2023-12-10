import { Loader as LoaderDrei } from '@react-three/drei'

export default function Loader() {
  const containerStyle = {
    background: '#AED0FF',
    transition: 'opacity 100ms ease',
    zIndex: 15,
  }
  const dataStyle = {
    color: 'black',
  }
  return <LoaderDrei containerStyles={containerStyle} dataStyles={dataStyle} />
}
