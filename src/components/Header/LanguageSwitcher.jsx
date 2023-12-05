import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  function handleChange(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <select onChange={handleChange} className='bg-transparent outline-0'>
      <option className='bg-jean' value='en'>
        English
      </option>

      <option className='bg-jean' value='jp'>
        日本語
      </option>

      <option className='bg-jean' value='fr'>
        Français
      </option>
    </select>
  )
}
