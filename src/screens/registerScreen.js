import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { useState } from 'react'

import CustomInput from '../components/customInput'

import { supabase }
from '../services/supabase'

export default function RegisterScreen({
  navigation,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  async function handleRegister() {
    if (!email || !password) {
      return alert('Erro,Preencha todos os campos')
    }

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
      })

    console.log('DATA:', data)
    console.log('ERROR:', error)

    if (error) {
      return alert('Erro')
    }

    alert('Conta criada,Agora faça login')

    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          Criar Conta
        </Text>

        <Text style={styles.subtitle}>
          Entre para o MangaTrack
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
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.link}>
            Já possui conta?
            {' '}
            Entrar
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
    fontSize: 34,
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