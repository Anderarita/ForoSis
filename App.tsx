import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CronometroScreen from './src/presentation/screens/CronometroScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CronometroScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
