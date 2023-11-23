/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Accordion} from './src/components/Accordion/Accordion';
import {api} from './src/utils/api';
export interface Patients {
  id: number;
  name: string;
  age: number;
  state: string;
  city: string;
}
function App(): JSX.Element {
  const [patients, setPatients] = useState<Patients[]>([]);
  useEffect(() => {
    const getPatients = async () => {
      const {data} = await api.get('/patients');
      setPatients(data.data);
    };
    getPatients();
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Accordion data={patients} />
    </SafeAreaView>
  );
}

export default App;
