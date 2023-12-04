import useStore from '@/store/index.jsx'

export default function OnTheGroundBoolean() {
  const [appearsAtTheGround, setAppearsAtTheGround] = useStore((state) => [
    state.appearsAtTheGround,
    state.setAppearsAtTheGround,
  ])

  function handleChange(e) {
    const newState = e.target.checked
    setAppearsAtTheGround(newState)
  }

  return (
    <div className='flex px-5 py-1.5'>
      <input
        type='checkbox'
        name='appearsOnTheGround'
        defaultChecked={appearsAtTheGround}
        onChange={handleChange}
        className='mr-2'
      />
      <span>Appears on the ground</span>
    </div>
  )
}
