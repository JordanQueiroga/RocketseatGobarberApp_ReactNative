import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
  background: #009f5f;
`;
