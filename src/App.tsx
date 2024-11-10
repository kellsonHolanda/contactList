import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ErrorBoundary from './components/ErrorBoundary';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px auto;
  width: 50%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Container>
          <h1>Lista de Contatos</h1>
          <ContactForm />
          <ContactList />
        </Container>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

