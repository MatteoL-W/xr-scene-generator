import Dashboard from './components/Dashboard.jsx'
import { HotkeysProvider } from 'react-hotkeys-hook'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n.js'

export default function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <HotkeysProvider initiallyActiveScopes={['renderer']}>
          <Dashboard />
        </HotkeysProvider>
      </I18nextProvider>
    </>
  )
}
