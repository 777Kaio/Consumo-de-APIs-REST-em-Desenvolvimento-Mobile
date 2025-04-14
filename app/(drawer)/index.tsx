import { View, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import { styles } from '~/assets/styles/styles'

import App from '~/components/app'

const PlayerList = () => {
  return (

     <SafeAreaView style={styles.body}>
        <View style={styles.body}>
          <Text style={styles.title}>Boas Vindas!</Text>

        <view style={styles.body}>
          <Text style={styles.text}>
            Este é um aplicativo de previsão do tempo, onde você pode consultar a previsão do tempo para qualquer cidade do mundo.
            Digite o nome da cidade desejada e clique no botão "Buscar" para obter as informações meteorológicas atualizadas.
          </Text>
            <TouchableOpacity style={styles.button}>
            
            
            <Text style={styles.text}>
            <Link href="/weather">
            Acessar
            </Link>
            </Text>

            
            </TouchableOpacity>
        </view>
         
        </View>
      </SafeAreaView>
  );
};

export default PlayerList;
