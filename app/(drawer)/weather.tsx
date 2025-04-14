import { View, SafeAreaView} from "react-native";
import { styles } from '~/assets/styles/styles'

import App from '~/components/app'

const PlayerList = () => {
  return (

     <SafeAreaView style={styles.body}>
        <View>
          <App></App>
         
        </View>
      </SafeAreaView>
  );
};

export default PlayerList;
