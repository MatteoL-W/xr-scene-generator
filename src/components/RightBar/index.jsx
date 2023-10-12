import SceneCompositionList from './List/index.jsx'
import MeshModifier from './Modifier/index.jsx'

export default function ModifiersBar() {
  return (
    <div className='w-1/4 bg-jean text-white'>
      <SceneCompositionList />
      <MeshModifier />
    </div>
  )
}
