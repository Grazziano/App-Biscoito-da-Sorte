import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.text}>
        " Está é minha primeira frase do biscoito! "
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('OI')}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 15, borderColor: '#121212' }]}
        onPress={() => alert('OI')}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  text: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#DD7B22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22',
  },
});
