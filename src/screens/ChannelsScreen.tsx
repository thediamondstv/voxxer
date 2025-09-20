import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Channels'>;

const CHANNELS = {
  alpha: [
    { id: 'general', name: '#general' },
    { id: 'standup', name: '#stand-up' },
  ],
  design: [
    { id: 'design-system', name: '#design-system' },
    { id: 'feedback', name: '#feedback' },
  ],
  gaming: [
    { id: 'lfg', name: '#looking-for-game' },
    { id: 'clips', name: '#clips' },
  ],
} satisfies Record<string, { id: string; name: string }[]>;

const ChannelsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { serverId = 'alpha' } = route.params ?? {};

  const channels = useMemo(() => CHANNELS[serverId] ?? [], [serverId]);

  const handleSelectChannel = (channelId: string) => {
    navigation.navigate('Chat', { channelId, serverId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Channels</Text>
        <Text style={styles.subtitle}>Pick a channel to jump into the conversation.</Text>
        {channels.map((channel) => (
          <View key={channel.id} style={styles.channelItem}>
            <Text style={styles.channelName}>{channel.name}</Text>
            <Button title="Enter" onPress={() => handleSelectChannel(channel.id)} />
          </View>
        ))}
        {channels.length === 0 && (
          <Text style={styles.empty}>No channels available for this server yet.</Text>
        )}
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
  channelItem: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fafafa',
    marginBottom: 16,
  },
  channelName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  empty: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
});

export default ChannelsScreen;
