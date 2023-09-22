import Header from './Header.jsx'
import Workspace from './Workspace.jsx'

export default function Dashboard() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <Header />
      <Workspace />
    </div>
  )
}
