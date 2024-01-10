import PropTypes from 'prop-types'
import useNewTransformControlsMode from '@/hooks/useTransformControlsHandler.jsx'
import { LiaArrowsAltSolid } from 'react-icons/lia'
import { TbRotate360 } from 'react-icons/tb'
import { LuScaling } from 'react-icons/lu'

export default function TransformControlsOpt({ objectTransformations }) {
  const setTransformControlsMode = useNewTransformControlsMode()
  return (
    <>
      {objectTransformations?.position && (
        <LiaArrowsAltSolid
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('translate')}
        />
      )}

      {objectTransformations?.rotation && (
        <TbRotate360
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('rotate')}
        />
      )}

      {objectTransformations?.scale && (
        <LuScaling
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('scale')}
        />
      )}
    </>
  )
}

TransformControlsOpt.propTypes = {
  objectTransformations: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.arrayOf(PropTypes.number),
  }),
}
