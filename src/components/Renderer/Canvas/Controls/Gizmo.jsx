import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { useXR } from '@react-three/xr'

export default function Gizmo() {
  const { isPresenting } = useXR()
  if (isPresenting) return

  return (
    <GizmoHelper alignment='bottom-right' margin={[65, 65]}>
      <GizmoViewport
        axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
        labelColor='white'
      />
    </GizmoHelper>
  )
}
