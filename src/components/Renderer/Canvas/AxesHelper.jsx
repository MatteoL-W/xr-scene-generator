import useStore from '@/store/index.jsx'

export default function AxesHelper() {
  const [isAxesHelperOpen] = useStore((state) => [state.isAxesHelperOpen])

  if (isAxesHelperOpen) return <axesHelper scale={3} />
}
