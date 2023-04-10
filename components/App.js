import { StyleSheet, Text, View } from 'react-native';

import Filme from './src/components/Itens';


const listaFilmes = [
  {
    titulo: "Machado de Berserker",
    sinopse: "Uma otima arma para combate a curta distancia",
    urlPoster: "https://i.pinimg.com/550x/84/34/e7/8434e7a8dbc8d03eef66ea4eb6beeaec.jpg"
  },
  {
    titulo: "Lança de Avalon",
    sinopse: "Uma arma perfeita para combate curta/medio alcance",
    urlPoster: "https://static.wixstatic.com/media/371a13_36d223a6f8b94f21aa30bd8f627201a7~mv2.jpg/v1/fill/w_1280,h_1811,al_c,q_85/371a13_36d223a6f8b94f21aa30bd8f627201a7~mv2.jpg"
  },
  {
    titulo: "Escudo de Avalon",
    sinopse: "Melhor um na mão doque uma flechada",
    urlPoster: "https://i.pinimg.com/550x/a3/85/fb/a385fbabfda8dd37ca43ece01eb43e18.jpg"
  }
]


export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.texto}>Loja de Trocas</Text>
      {listaFilmes.map(filme => <Filme filme={filme}/>)}
    </View>

    // outro jeito de adicionar os itens seria pela lista.
    /*  <Filme filme={listaFilmes[0]} />
      <Filme filme={listaFilmes[1]} />*/
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#66FF99',
    fontSize: '22px',
    fontWeight: 'bold',
    padding: 25,

  },
  img: {
    width: 50,
    height: 50
  }
});
