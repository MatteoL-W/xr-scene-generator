import SceneCompositionList from './List/index.jsx'
import ObjectModifier from './Modifier/index.jsx'

export default function ModifiersBar() {
  return (
    <div className='w-1/4 bg-jean text-white'>
      <SceneCompositionList />
      <ObjectModifier />
    </div>
  )
}
