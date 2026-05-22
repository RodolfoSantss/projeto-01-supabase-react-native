import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native'

import { useState } from 'react'

import CustomInput from '../components/customInput'

import { supabase } from '../services/supabase'

export default function CreateMangaScreen() {
  const [titulo, setTitulo] = useState('')
  const [genero, setGenero] = useState('')
  const [nota, setNota] = useState('')
  const [volumes, setVolumes] = useState('')
  const [imagem, setImagem] = useState('')
  const [status, setStatus] = useState('')
  const [publico, setPublico] = useState(false)

  async function handleCreate() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return alert('Erro,Usuário não autenticado')
    }

    const { error } = await supabase
      .from('mangas')
      .insert([
        {
          titulo,
          genero,
          nota: Number(nota),
          volumes: Number(volumes),
          imagem,
          status,
          publico,
          user_id: user.id,
        },
      ])

    if (error) {
      return alert('Erro', error.message)
    }

    alert('Sucesso,Mangá cadastrado')

    setTitulo('')
    setGenero('')
    setNota('')
    setVolumes('')
    setImagem('')
    setStatus('')
    setPublico(false)
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Novo Mangá
      </Text>

      <Text style={styles.subtitle}>
        Cadastre seu mangá favorito
      </Text>

      <View style={styles.form}>
        <CustomInput
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />

        <CustomInput
          placeholder="Gênero"
          value={genero}
          onChangeText={setGenero}
        />

        <CustomInput
          placeholder="Nota"
          value={nota}
          onChangeText={setNota}
        />

        <CustomInput
          placeholder="Volumes"
          value={volumes}
          onChangeText={setVolumes}
        />

        <CustomInput
          placeholder="URL da imagem"
          value={imagem}
          onChangeText={setImagem}
        />

        <CustomInput
          placeholder="Status"
          value={status}
          onChangeText={setStatus}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            Tornar público
          </Text>

          <Switch
            value={publico}
            onValueChange={setPublico}
            thumbColor="#ff4d4d"
            trackColor={{
              false: '#555',
              true: '#ffb3b3',
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCreate}
        >
          <Text style={styles.buttonText}>
            Cadastrar Mangá
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081120',
    padding: 20,
  },

  title: {
    color: '#ff4d4d',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 25,
  },

  form: {
    backgroundColor: '#182544',
    borderRadius: 22,
    padding: 20,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  switchText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',

  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})