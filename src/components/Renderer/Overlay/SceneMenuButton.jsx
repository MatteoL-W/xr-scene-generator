import useStore from '@/store/index.jsx'

export default function SceneMenuButton() {
  const [setMenuState] = useStore((state) => [state.setMenuState])

  return (
    <div
      className='absolute top-5 left-5 p-2 flex flex-col z-10 bg-jean text-white rounded cursor-pointer'
      onClick={() => setMenuState(true)}
    >
      <span className='text-center text-5xl font-semibold'>+</span>
      Add an object
    </div>
  )
}
