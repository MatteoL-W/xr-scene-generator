import RightBar from './RightBar/index.jsx'
import Header from '@/components/Header/index.jsx'
import Renderer from '@/components/Renderer/index.jsx'

export default function Dashboard() {
  return (
    <div className='flex h-screen w-screen'>
      <div className='flex flex-col h-full w-3/4'>
        <Header />
        <Renderer />
      </div>

      <RightBar />
    </div>
  )
}
