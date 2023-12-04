import SceneCompositionList from './List/index.jsx'
import ObjectModifier from './Modifier/index.jsx'
import SkyboxModifier from '@/components/RightBar/Skybox/index.jsx'

export default function ModifiersBar() {
  return (
    <div className='w-1/4 bg-jean text-white'>
      <SceneCompositionList />
      <ObjectModifier />
      <SkyboxModifier />
    </div>
  )
}
