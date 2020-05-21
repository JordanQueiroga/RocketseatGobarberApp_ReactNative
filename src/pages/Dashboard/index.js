import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Background from '~/components/Background';

import { Container, Title, List } from './styles';
import Appointment from '~/pages/Appointment';

function Dashboard({ isFocused }) {
  console.tron.log(isFocused);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    if (true) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}
/* isto não é mais recomendado pela documenttação pois precida de código a mais qndo
o componente estiver com ordem superior, deste modo vou por direto nas rotas
*/
Dashboard.navigationOptions = {
  title: 'Agendamentos',
  tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color} />,
};

export default withNavigationFocus(() => (
  <Dashboard navigationOptions={Dashboard.navigationOptions} />
));
