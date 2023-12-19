import { useTranslation } from 'react-i18next'
import Title from '@/components/RightBar/Title.jsx'
import SoftwarePreset from './SoftwarePreset.jsx'
import UserPreset from './UserPreset.jsx'
import EnvironmentLightInput from './EnvironmentLightInput.jsx'
import { RiLandscapeFill } from 'react-icons/ri'

export default function SkyboxModifier() {
  const { t } = useTranslation()
  return (
    <>
      <Title title={t('right.skybox.title')} Icon={RiLandscapeFill} />
      <SoftwarePreset />
      <UserPreset />
      <EnvironmentLightInput />
    </>
  )
}
