import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require("./assets/lock-152879 1.png")} style={{
        width: 105,
        height: 117,
        marginTop: 60,
      }}></Image>
      
      <Text style={{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
      }}>FORGET <br/> PASSWORD</Text>

      <Text style={{
        textAlign: 'center',
        margin: 30,
        fontWeight: 'bold'
      }}>Provide your account's email for which you <br/> want to reset your password</Text>

      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 20
      }}>
        <Image source={require("./assets/mail-2935365 1.png")} style={{
              width: 48,
              height: 45,
              // margin: 1
            }}></Image>
        <TextInput style={{
          width: 280,
          height: 45,
          backgroundColor: '#c4c4c4',
          // marginVertical: 20
        }}
          placeholder='Email'> 
        </TextInput>
      </View>
      <View style={{
        flexDirection: 'column'
      }}>
        <TextInput style={{width: 325}}></TextInput>

        <Button title='NEXT' color="#E3C000"/>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to bottom, #ccf4f6, #e4f4f5, #44d8f8)',
  },
});
