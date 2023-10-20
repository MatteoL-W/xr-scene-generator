import Subtitle from '../Subtitle.jsx'
import useStore from '@/store/index.jsx'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'

Shadows.propTypes = {
  args: PropTypes.object.isRequired,
}

export default function Shadows({ args }) {
  const [modifyFocusedMeshArgs] = useStore(
    useShallow((state) => [state.modifyFocusedMeshArgs]),
  )

  return (
    <>
      <Subtitle title='Shadows' />

      <div className='p-3 pt-0 flex gap-y-2 justify-between'>
        <div className='flex items-center'>
          <label htmlFor='castShadows'>Cast Shadows</label>
          <input
            type='checkbox'
            name='castShadows'
            checked={args.castShadow}
            onChange={() => {
              modifyFocusedMeshArgs({
                castShadow: !args.castShadow,
              })
            }}
          />
        </div>

        <div className='flex items-center'>
          <label htmlFor='receiveShadows'>Receive Shadows</label>
          <input
            type='checkbox'
            name='receiveShadows'
            checked={args.receiveShadow}
            onChange={() => {
              modifyFocusedMeshArgs({
                receiveShadow: !args.receiveShadow,
              })
            }}
          />
        </div>
      </div>
    </>
  )
}
