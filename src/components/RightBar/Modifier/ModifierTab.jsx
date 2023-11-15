import PropTypes from 'prop-types'
import Subtitle from '@/components/RightBar/Subtitle.jsx'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

ModifierTab.propTypes = {
  interactiveObjectInputs: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  showXYZ: PropTypes.bool,
  isLargerGrid: PropTypes.bool,
}

export default function ModifierTab({
  interactiveObjectInputs,
  title,
  showXYZ,
  isLargerGrid,
}) {
  const repository = Object.keys(interactiveObjectInputs)[0]
  const repositoryContent = interactiveObjectInputs[repository]

  if (!repositoryContent) return

  return (
    <>
      <Subtitle title={title} />
      <div className='p-3 pt-0 flex flex-col gap-y-2'>
        {showXYZ && (
          <div className='grid grid-cols-4 w-[95%] text-xs'>
            <div></div>
            <div className='text-center'>X</div>
            <div className='text-center'>Y</div>
            <div className='text-center'>Z</div>
          </div>
        )}

        <div
          className={
            !isLargerGrid
              ? 'grid grid-cols-4 w-[95%] items-center gap-3'
              : 'grid grid-cols-2 w-[95%] items-center gap-y-2'
          }
        >
          {Object.entries(repositoryContent).map(
            ([propertyLabel, propertyValue]) => (
              <GenerateAutomaticInput
                key={propertyLabel}
                repository={repository}
                propertyLabel={propertyLabel}
                propertyValue={propertyValue}
              />
            ),
          )}
        </div>
      </div>
    </>
  )
}
