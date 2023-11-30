import useStore from '@/store/index.jsx'

export default function DebugReportButton() {
  const [isDebuggerUIOpen, startWaitingForDebugReport] = useStore((state) => [
    state.isDebuggerUIOpen,
    state.startWaitingForDebugReport,
  ])

  if (!isDebuggerUIOpen) return <></>

  return (
    <div
      className='absolute top-28 left-5 p-2 flex flex-col z-10 bg-jean text-white rounded cursor-pointer'
      onClick={() => startWaitingForDebugReport()}
    >
      Log debug report
    </div>
  )
}
