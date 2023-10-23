import React, { useContext } from 'react';
import Router from './routes';
import { DbProvider } from './context/DbContext';

export default function App(): JSX.Element {

  return (
    <DbProvider>
        <Router />
    </DbProvider>
  );
}
