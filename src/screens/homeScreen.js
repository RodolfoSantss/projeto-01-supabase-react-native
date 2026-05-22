import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'

import { useEffect, useState } from 'react'

import { supabase } from '../services/supabase'

import MangaCard from '../components/mangaCard'

import theme from '../styles/theme'

export default function HomeScreen() {
  const [mangas, setMangas] = useState([])

  async function fetchMangas() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data, error } = await supabase
      .from('mangas')
      .select('*')
      .or(`publico.eq.true,user_id.eq.${user.id}`)
      .order('created_at', {
        ascending: false,
      })

    if (error) {
      console.log(error)
      return
    }

    setMangas(data || [])
  }

  useEffect(() => {
    fetchMangas()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mangás Recentes
      </Text>

      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}

        numColumns={2}

        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}

        contentContainerStyle={{
          paddingBottom: 30,
        }}

        renderItem={({ item }) => (
          <MangaCard manga={item} />
        )}

        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum mangá cadastrado
          </Text>
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  title: {
    color: '#ff4d4d',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: 40,
  },
})