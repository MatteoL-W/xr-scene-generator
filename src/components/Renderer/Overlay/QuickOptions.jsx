import QuickSceneOptions from './QuickSceneOptions.jsx'
import QuickControlsOptions from './QuickControlsOptions.jsx'

export default function QuickOptions() {
  return (
    <div className='absolute z-10 right-4 top-4 flex flex-col gap-y-3'>
      <QuickSceneOptions />
      <QuickControlsOptions />
    </div>
  )
}
