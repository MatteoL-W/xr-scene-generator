import useStore from '@/store/index.jsx'
import { useTranslation } from 'react-i18next'

export default function OpenMenuButton() {
  const { t } = useTranslation()
  const [setMenuState] = useStore((state) => [state.setMenuState])

  return (
    <div
      className='absolute top-5 left-5 p-2 flex flex-col z-10 bg-jean text-white rounded cursor-pointer'
      onClick={() => setMenuState(true)}
    >
      <span className='text-center text-4xl font-semibold'>+</span>
      {t('overlay.menu.add')}
    </div>
  )
}
