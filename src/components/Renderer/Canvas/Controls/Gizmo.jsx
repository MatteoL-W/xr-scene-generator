import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { withXRImmersion } from '@/hoc/withXRImmersion.jsx'

function GizmoComponent() {
  return (
    <GizmoHelper alignment='bottom-right' margin={[65, 65]}>
      <GizmoViewport
        axisColors={['#d93333', '#03bd49', '#2f69bd']}
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
