import PropTypes from 'prop-types'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

ModifierInputs.propTypes = {
  interactiveObjectInputs: PropTypes.object.isRequired,
  showXYZ: PropTypes.bool,
  isLargerGrid: PropTypes.bool,
}

export default function ModifierInputs({
  interactiveObjectInputs,
  showXYZ,
  isLargerGrid,
}) {
  const repository = Object.keys(interactiveObjectInputs)[0]
  const repositoryContent = interactiveObjectInputs[repository]

  if (!repositoryContent) return

  return (
    <>
      <div className='px-4 p-3 pt-0 flex flex-col gap-y-2'>
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
