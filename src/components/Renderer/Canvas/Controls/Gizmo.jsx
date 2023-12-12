import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { withXRImmersion } from '@/hoc/withXRImmersion.jsx'

function GizmoComponent() {
  return (
    <GizmoHelper alignment='bottom-right' margin={[65, 65]}>
      <GizmoViewport
        axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
        labelColor='white'
      />
    </GizmoHelper>
  )
}

const Gizmo = withXRImmersion({
  Component: GizmoComponent,
  insideXR: false,
})
export default Gizmo
