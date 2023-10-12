import Workspace from './Workspace.jsx'
import ModifiersBar from './RightBar/index.jsx'

export default function Dashboard() {
  return (
    <div className='flex h-screen w-screen'>
      <Workspace />
      <ModifiersBar />
    </div>
  )
}
