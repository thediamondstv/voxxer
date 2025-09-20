import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Servers'>;

const SERVERS = [
  { id: 'alpha', name: 'Alpha Team' },
  { id: 'design', name: 'Design Collective' },
  { id: 'gaming', name: 'Gaming Hub' },
];

const ServersScreen: React.FC<Props> = ({ navigation }) => {
  const handleSelectServer = (serverId: string) => {
    navigation.navigate('Channels', { serverId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Select a server</Text>
        <Text style={styles.subtitle}>Choose where you would like to hang out.</Text>
        {SERVERS.map((server) => (
          <View key={server.id} style={styles.serverItem}>
            <Text style={styles.serverName}>{server.name}</Text>
            <Button title="Open" onPress={() => handleSelectServer(server.id)} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  serverItem: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fafafa',
    marginBottom: 16,
  },
  serverName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
});

export default ServersScreen;
