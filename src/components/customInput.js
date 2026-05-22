import {
  TextInput,
  StyleSheet,
} from 'react-native'

export default function CustomInput(props) {
  return (
    <TextInput
      placeholderTextColor="#94A3B8"
      style={styles.input}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#24365c',
    color: '#fff',

    paddingVertical: 16,
    paddingHorizontal: 18,

    borderRadius: 16,

    marginBottom: 16,

    fontSize: 15,

    borderWidth: 1,
    borderColor: '#32476d',
  },
})