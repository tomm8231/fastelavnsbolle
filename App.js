import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from './src/components/Tabs'
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"


const App = () => {
  const [isloading, error, weather] = useGetWeather()

  if (weather && weather.list && !isloading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      { error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
        ) }
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }

})

export default App