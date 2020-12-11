import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import Header from './components/Header';
import axios from 'axios';

const Home: () => React$Node = ({navigation}) => {
  const pegarEndereco = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      const endereco = {
        rua: response.data.logradouro,
        complemento: response.data.complemento,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
        ibge: response.data.ibge,
        gia: response.data.gia,
        ddd: response.data.ddd,
        siafi: response.data.siafi,
      };
      navigation.navigate('Pages2', endereco);
    });
  };

  const [cep, setCep] = React.useState('');

  return (
    <>
      <Header title="CONSULTA DE CEP" />
      <View style={styles.container}>
        <Text style={styles.title}>Digite o CEP:</Text>
        <Text />
        <TextInput
          onChangeText={(text) => setCep(text)}
          value={cep}
          style={styles.textInput}
        />
        <Text />
        <Button title="Buscar" onPress={() => pegarEndereco()} />
        <Text />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
