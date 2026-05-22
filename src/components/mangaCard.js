import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import theme from '../styles/theme'

export default function MangaCard({ manga }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: manga.imagem }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {manga.titulo}
        </Text>

        <Text style={styles.info}>
          Gênero: {manga.genero}
        </Text>

        <Text style={styles.info}>
          Nota: {manga.nota}
        </Text>

        <Text style={styles.info}>
          Volumes: {manga.volumes}
        </Text>

        <Text style={styles.info}>
          Status: {manga.status}
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {manga.publico
              ? 'Público'
              : 'Privado'}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#182544',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    width: '48%',
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: 140,
  },

  content: {
    padding: 14,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  info: {
    color: '#d6d6d6',
    fontSize: 15,
    marginBottom: 5,
  },

  badge: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
})