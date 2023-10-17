export default function Lights() {
  // const directionalLightRef = useRef(null)
  // useHelper(directionalLightRef, DirectionalLightHelper, 1, 'red')

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[0, 0, 5]}
        castShadow={true}
        // ref={directionalLightRef}
      />
    </>
  )
}
