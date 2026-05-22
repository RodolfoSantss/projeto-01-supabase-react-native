import 'react-native-gesture-handler'

import { NavigationContainer }
from '@react-navigation/native'

import { useEffect, useState }
from 'react'

import { supabase }
from './src/services/supabase'

import AuthRoutes
from './src/routes/auth.routes'

import AppRoutes
from './src/routes/app.routes'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <NavigationContainer>
      {session
        ? <AppRoutes />
        : <AuthRoutes />
      }
    </NavigationContainer>
  )
}