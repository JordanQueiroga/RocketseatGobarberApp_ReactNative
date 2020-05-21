import React from 'react';

// import { Container } from './styles';
import { useSelector } from 'react-redux';
import Routes from './routes';

export default function src() {
  const signed = useSelector((state) => state.auth.signed);
  return <Routes signedIn={signed} />;
}
