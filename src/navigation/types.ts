export type RootStackParamList = {
  SignIn: undefined;
  Servers: undefined;
  Channels: { serverId: string } | undefined;
  Chat: { channelId: string; serverId: string } | undefined;
};
