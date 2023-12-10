import SceneCompositionList from './SceneCompositionList/index.jsx'
import ObjectModifier from './ObjectModifier/index.jsx'
import SkyboxModifier from '@/components/RightBar/SkyboxModifier/index.jsx'

export default function RightBar() {
  return (
    <div className='w-1/4 bg-jean text-white'>
      <SceneCompositionList />
      <ObjectModifier />
      <SkyboxModifier />
    </div>
  )
}
