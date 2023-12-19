import { GizmoHelper, GizmoViewport } from '@react-three/drei'

export default function Gizmo() {
  return (
    <GizmoHelper alignment='bottom-right' margin={[65, 65]}>
      <GizmoViewport
        axisColors={['#d93333', '#03bd49', '#2f69bd']}
        labelColor='white'
      />
    </GizmoHelper>
  )
}
