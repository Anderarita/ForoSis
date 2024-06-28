import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import useCronometro from '../hooks/useCronometro';
import { theme, styles } from '../../config/app-theme';

const CronometroScreen = () => {
  const {
    time,
    running,
    laps,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    lapStopwatch,
  } = useCronometro();

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <Text style={styles.time}>{formatTime(time)}</Text>
        <View style={styles.buttons}>
          <Button onPress={startStopwatch} title="Start" color={theme.colors.primary} />
          <Button onPress={stopStopwatch} title="Stop" color={theme.colors.secondary} />
          <Button onPress={resetStopwatch} title="Reset" color={theme.colors.primary} />
          <Button onPress={lapStopwatch} title="Lap" color={theme.colors.secondary} />
        </View>
      </View>
      <View style={styles.table}>
        <Text style={styles.tableHeader}>Vueltas</Text>
        <FlatList
          data={laps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{`Vuelta ${index + 1}`}</Text>
              <Text style={styles.tableCell}>{formatTime(item)}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CronometroScreen;


