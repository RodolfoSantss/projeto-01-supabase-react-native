import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { useEffect, useState }
from 'react'

import { supabase }
from '../services/supabase'

export default function ProfileScreen() {
  const [email, setEmail] = useState('')

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      setEmail(user.email)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {email.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.title}>
          Perfil
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081120',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: 320,
    backgroundColor: '#182544',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    elevation: 8,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatarText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  title: {
    color: '#ff4d4d',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  email: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#ff4d4d',
    width: '100%',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})