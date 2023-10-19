import Orbit from '@/components/Renderer/Controls/Orbit.jsx'
import Transform from '@/components/Renderer/Controls/Transform.jsx'
import AppliedGizmoHelper from '@/components/Renderer/Controls/AppliedGizmoHelper.jsx'

export default function Controls() {
  return (
    <>
      <Orbit />
      <Transform />
      <AppliedGizmoHelper />
    </>
  )
}
