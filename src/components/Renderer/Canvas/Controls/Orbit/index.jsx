import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import ListenForCameraInstruction from '@/components/Renderer/Canvas/Controls/Orbit/ListenForCameraInstruction.jsx'

export default function Orbit() {
  const { camera, gl, set, get } = useThree()
  const orbitControls = useRef()

  useEffect(() => {
    orbitControls.current = new OrbitControls(camera, gl.domElement)
    orbitControls.current.enableDamping = false
    orbitControls.current.maxDistance = 50
    orbitControls.current.minDistance = 0.5

    return () => {
      orbitControls.current.dispose()
    }
  }, [camera, gl])

  useEffect(() => {
    const old = get().controls
    set({ controls: orbitControls.current })
    return () =>
      set({
        controls: old,
      })
  }, [orbitControls])

  useFrame(() => orbitControls.current.update())

  return <ListenForCameraInstruction orbitControlsRef={orbitControls} />
}
