import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Pizzaria do Paraíba
      </Text>  

      <Text>Cárdapio</Text>

      <ScrollView>

      <View style={styles.cxbolo}>
      
      <Text style={styles.subtitulo}>
        Bolo de Fubá
      </Text>
      <Text style={styles.preco}> R$15,00 </Text>

      <Image style={styles.img} resizeMode="stretch" source={require("../assets/mussarela.jpg")}/>

      <View style={styles.comprar}>
        <Text style={styles.comprartxt}> Comprar </Text>
      </View>

      </View>

      <View style={styles.cxbolo}>

      <Text style={styles.subtitulo}>Bolo de Chocolate</Text>
      <Text style={styles.preco}> R$18,00 </Text>
      <Image style={styles.img} resizeMode="stretch" source={require("../assets/peperoni.jpg")}/>

      <View style={styles.comprar}>
        <Text style={styles.comprartxt}> Comprar </Text>
      </View>

      </View>

      

      </ScrollView>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e3b212',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  img: {
    width: 282,
    height: 350,
    justifyContent: 'center',
    borderRadius: 5,
  },
  // icon: {
  //   width: 50,
  //   height: 50
  // },
  subtitulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginTop: 40,
    fontWeight: '500'
  },
  preco: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginTop: 40,
    fontWeight: '500',
    textDecorationLine:'underline'
  },
  cxbolo: {
    flex: 1,
    backgroundColor: '#9c371e',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
  },
  comprar:{
    backgroundColor: '#64d660',
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15
  },
  comprartxt: {
    fontSize: 25,
    fontWeight: '500' ,
  }
});
