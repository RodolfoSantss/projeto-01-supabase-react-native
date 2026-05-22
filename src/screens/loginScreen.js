import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { useState } from 'react'

import CustomInput from '../components/customInput'

import { supabase }
from '../services/supabase'

export default function LoginScreen({
  navigation,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  async function handleLogin() {
    if (!email || !password) {
      return alert('Erro, Preencha todos os campos')
    }

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (error) {
      return alert('Erro no login')
    }

    alert('Sucesso,Login realizado')
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          MangaTrack
        </Text>

        <Text style={styles.subtitle}>
          Organize seus mangás favoritos
        </Text>

        <CustomInput
          placeholder="Seu email"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          placeholder="Sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Register')
          }
        >
          <Text style={styles.link}>
            Não possui conta?
            {' '}
            Cadastre-se
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
    width: 340,
    backgroundColor: '#182544',
    borderRadius: 25,
    padding: 30,
    elevation: 8,
  },

  title: {
    color: '#ff4d4d',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 8,
    fontSize: 15,
  },

  button: {
    backgroundColor: '#ff4d4d',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 22,
    fontSize: 15,
  },
})