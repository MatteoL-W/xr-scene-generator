import Subtitle from '../Subtitle.jsx'
import useStore from '@/store/index.jsx'
import PropTypes from 'prop-types'

Shadows.propTypes = {
  args: PropTypes.object.isRequired,
}

export default function Shadows({ args }) {
  const [modifyFocusedObjectArgs] = useStore((state) => [
    state.modifyFocusedObjectArgs,
  ])

  return (
    <>
      <Subtitle title='Shadows' />

      <div className='p-3 pt-0 flex gap-y-2 justify-between'>
        {args.castShadow !== undefined && (
          <div className='flex items-center'>
            <label htmlFor='castShadows'>Cast Shadows</label>
            <input
              type='checkbox'
              id='castShadows'
              checked={args.castShadow}
              onChange={() => {
                modifyFocusedObjectArgs({
                  castShadow: !args.castShadow,
                })
              }}
            />
          </div>
        )}

        {args.receiveShadow !== undefined && (
          <div className='flex items-center'>
            <label htmlFor='receiveShadows'>Receive Shadows</label>
            <input
              type='checkbox'
              id='receiveShadows'
              checked={args.receiveShadow}
              onChange={() => {
                modifyFocusedObjectArgs({
                  receiveShadow: !args.receiveShadow,
                })
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}
