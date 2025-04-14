//Importação das coisa que precisa usar tipo os botao, texto e view

import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, Image} from 'react-native';
import { styles } from '~/assets/styles/styles'

// Constante que define as images como variaveis

const imgsClima = {
  Clear: require('../assets/images/sol.png'),
  Clouds: require('../assets/images/nuvem.png'),
  Rain: require('../assets/images/garroazinha.png'),
  Snow: require('../assets/images/neve.png'),
  Thunderstorm: require('../assets/images/chuvaForte.png'),
  Drizzle: require('../assets/images/chuva.png'),
  Mist: require('../assets/images/neblina.png'),
};


// constante principal que vai puxar os dados da API


const App = () => {
  const [city, setCity] = useState(''); 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'dbf82a4afed00b1b8408419eb5a484c4'; //Chave da Api que deixa eu acessar os dados


  //Constante que vai puxar os dados (vai ser usado no botão)

  const fetchWeatherData = async () => {
    if (!city) {
      setError("Digite o nome da cidade!");
      return;
    }

    setLoading(true);
    setError(null);


    //Acessa a API e faz a requisição, se der certo, retorna os dados, se não avisa que a cidade nao foi encontrada
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message || "Cidade não encontrada!");
      }
    } catch (err) {
      setError("Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }
  };

// Input onde dá pra pesquisar o nome da cidade

  return (
    <View style={styles.cityContainer}>
      <TextInput
        style={styles.searchContainer}
        placeholder="Digite a cidade..."
        value={city}
        onChangeText={setCity}
      />

      

{loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={styles.error}>{error}</Text>}


{/*Onde tudo é mostrado na View, o nome da cidade, clima, temperatura e tals*/}

      {weatherData && (
        <View style={styles.weatherContainer}>
          <Image source={imgsClima[weatherData.weather[0].main]} style={styles.weatherImage} />
          <Text style={styles.city}>
            {weatherData.name}, {weatherData.sys?.country}
          </Text>
          <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
          <Text style={styles.weather}>{weatherData.weather[0].description}</Text>
        </View>
      )}

{/*Quando aperta o botão ele puxa a constante fetchWeatherData e faz os dados aparecerem*/}
      <TouchableOpacity style={styles.buttonClima} onPress={fetchWeatherData}>
          <Text style={styles.buttonText}>Buscar Clima</Text>
      </TouchableOpacity>

    </View>
  );
};

export default App;
