import { color } from "framer-motion";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cityContainer: {
    padding: 24,
    justifyContent: 'center',
    width: 300,
    height: 500,  
    backgroundColor: '#75b4e3',
    borderWidth: 3,
    borderColor: '#8fe0ff',
    shadowColor: '#8fe0ff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    borderRadius: 50,
    marginTop: 30,
    elevation: 5,  
    alignItems: 'center',
  },

 body: {
    flex: 1,
    backgroundColor: '#2b235a',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    color: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 200,
    color: 'white'
    
  },

  searchContainer: {
    padding: 24,
    justifyContent: 'center',
    width: '90%',
    height: 50, 
    backgroundColor: '#000',
    borderWidth: 3,
    borderColor: '#8fe0ff',
    shadowColor: '#8fe0ff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    borderRadius: 50,
    color: 'white',
    top: 20,
    elevation: 5,
    marginBottom: 10,
  },


  weatherContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },

  temperature: {
    fontSize: 40,
    color: '#8fe0ff',
  },

  weather: {
    fontSize: 18,
    color: 'white',
    textTransform: 'capitalize',
  },

  weatherImage: {
    width: 100,
    height: 100
  },

  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },

  button: {
    backgroundColor: '#31255a',
    padding: 10,
    borderRadius: 20,
    color: 'white',
    borderColor: '#54416d',
    borderWidth: 2,
    shadowColor: '#54416d',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    width: 200,
    left: '25%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonClima: {
    backgroundColor: '#31255a',
    padding: 10,
    borderRadius: 20,
    color: 'white',
    borderColor: '#54416d',
    borderWidth: 2,
    shadowColor: '#54416d',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    width: 200,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }

});


