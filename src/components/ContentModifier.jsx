import PropTypes from 'prop-types'
import AutomaticInputGenerator from '../services/AutomaticInputGenerator.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentModifier({ scenePiece }) {
  const [updateArgsContentFromScene] = useSceneStore(
    (state) => [state.updateArgsContentFromScene],
    shallow,
  )

  return (
    <div className='pt-2'>
      {Object.entries(scenePiece.args).map(([key, value]) => (
        <AutomaticInputGenerator
          key={key}
          label={key}
          value={value}
          onChange={(event) => {
            // Should we add a debouncer ?
            updateArgsContentFromScene(scenePiece, {
              [key]: event.target.value,
            })
          }}
        />
      ))}
    </div>
  )
}

ContentModifier.propTypes = {
  scenePiece: PropTypes.object.isRequired,
}
