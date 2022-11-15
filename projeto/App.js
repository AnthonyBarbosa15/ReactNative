
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.mengudo}>
        <View style={styles.container3}></View>
        <View style={styles.vasco}></View>
      </View>
      <View style={styles.dorival}>
        <View style={styles.rodilindo}></View>
        <View style={styles.ribamar}></View>
      </View>
      <View style={styles.bundagol}></View>

      <View>
        <View style={styles.linconlau}>
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
        </View>

        <View style={styles.linconlau}>
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
        </View>

        <View style={styles.aonde}></View>

      </View>

    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#16656579',
    height: 20,
    width: '100%',
    marginBottom: '5%'
  },
  container3: {
    backgroundColor: '#644',
    height: '60%',
    width: '40%',
    marginBottom: '3%'

  },
  vasco: {
    backgroundColor: '#644',
    height: '20%',
    width: '55%',
    marginBottom: '10%'

  },
  mengudo: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '35%'

  },
  ribamar: {
    backgroundColor: 'pink',
    height: 60,
    width: '50%'

  },
  rodilindo: {
    backgroundColor: 'blue',
    height: 60,
    width: '50%'

  },
  dorival: {
    flexDirection: 'row'

  },
  bundagol: {
    backgroundColor: '#16656579',
    height: '2%',
    width: '100%',
    marginBottom: '6%'
    
  },
  linconlau: {
    justifyContent: 'space-evenly',
    height: '27%',
    alignItems: 'center',
    flexDirection: 'row',


  },
  cuadrado: {
    backgroundColor: '#141414',
    height: '70%',
    width: '25%'

  },
  aonde:{
      width: '100%',
      height: '13%',
      marginTop: '5%',
      backgroundColor: '#16656579'
  }

})
