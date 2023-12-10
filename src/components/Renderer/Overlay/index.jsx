import QuickOptions from './QuickOptions/index.jsx'
import DebugReportButton from './DebugReportButton.jsx'
import Menu from './Menu/index.jsx'

export default function RendererOverlay() {
  return (
    <div className='relative'>
      <Menu />
      <QuickOptions />
      <DebugReportButton />
    </div>
  )
}
