import useStore from '@/store/index.jsx'

export default function Grid() {
  const [isGridOpen] = useStore((state) => [state.isGridOpen])

  if (isGridOpen)
    return (
      <Grid
        position={[0, -0.001, 0]}
        args={[10.5, 10.5]}
        cellColor='#91A3B0'
        cellSize={0.2}
        fadeDistance={40}
        fadeStrength={1}
        sectionColor='#91A3B0'
        sectionSize={2}
        infiniteGrid={true}
      />
    )
}
