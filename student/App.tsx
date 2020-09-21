import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Avatar, Card, Space} from '@educa/components';

const avatarUri =
  'https://avatars2.githubusercontent.com/u/37181742?s=460&u=304f0ea911bf02aa46f8ada9ad35d47cc1d3ca1b&v=4';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Space size={100} />
        <Avatar size={80} uri={avatarUri} />
        <Space size={10} />
        <Card title="Burhan Yilmaz" />
      </SafeAreaView>
    </>
  );
};

export default App;
