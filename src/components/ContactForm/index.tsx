import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/reducers';
import { Form, Input, Button } from './styles';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    console.log('Adding contact:', newContact);
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" required />
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;


