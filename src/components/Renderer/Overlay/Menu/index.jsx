import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import OpenMenuButton from './OpenMenuButton.jsx'
import MeshesList from './MeshesList.jsx'
import LightsList from './LightsList.jsx'
import { IoCloseSharp } from 'react-icons/io5'

export default function Menu() {
  const { t } = useTranslation()
  const [setMenuState, isMenuOpen] = useStore((state) => [
    state.setMenuState,
    state.isMenuOpen,
  ])

  if (!isMenuOpen) return <OpenMenuButton />

  return (
    <div className='absolute top-5 left-5 p-3 flex flex-col z-10 bg-jean'>
      <ul className='text-white my-2'>
        <MeshesList />
        <LightsList />
      </ul>

      <div
        className='pt-3 border-t border-white text-white text-center w-full cursor-pointer flex items-center'
        onClick={() => setMenuState(false)}
      >
        <IoCloseSharp className='mx-2' />
        {t('overlay.menu.close')}
      </div>
    </div>
  )
}
