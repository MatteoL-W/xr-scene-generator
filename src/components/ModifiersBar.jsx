import SceneCompositionList from './SceneCompositionList.jsx'
import MeshModifier from './MeshModifier.jsx'

export default function ModifiersBar() {
  return (
    <div className='w-1/4 bg-jean text-white'>
      <SceneCompositionList />
      <MeshModifier />
    </div>
  )
}
