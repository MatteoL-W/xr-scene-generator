import Title from '@/components/RightBar/Title.jsx'
import SoftwarePreset from './SoftwarePreset.jsx'
import UserPreset from './UserPreset.jsx'
import { RiLandscapeFill } from 'react-icons/ri'

export default function SkyboxModifier() {
  return (
    <>
      <Title title={'Skybox'} Icon={RiLandscapeFill} />
      <SoftwarePreset />
      <UserPreset />
    </>
  )
}