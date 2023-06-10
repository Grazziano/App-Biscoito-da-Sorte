import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [frase, setFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];

  function quebraBiscoito() {
    let randomNumber = Math.floor(Math.random() * frases.length);
    setFrase(' " ' + frases[randomNumber] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setFrase('');
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.text}>{frase}</Text>

      <TouchableOpacity style={styles.button} onPress={() => quebraBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      {frase !== '' && (
        <TouchableOpacity
          style={[styles.button, { marginTop: 15, borderColor: '#121212' }]}
          onPress={() => reiniciar()}
        >
          <View style={styles.btnArea}>
            <Text style={[styles.btnText, { color: '#121212' }]}>
              Reiniciar Biscoito
            </Text>
          </View>
        </TouchableOpacity>
      )}
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
