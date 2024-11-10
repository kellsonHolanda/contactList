import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeContact, editContact } from '../../redux/reducers';
import { List, ListItem, Button, EditForm, Input, Card, Titulo, BarraAcoes } from './styles';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>('');
  const [editEmail, setEditEmail] = useState<string>('');
  const [editPhone, setEditPhone] = useState<string>('');

  const handleEdit = (contact: { id: number; name: string; email: string; phone: string }) => {
    setEditingId(contact.id);
    setEditName(contact.name);
    setEditEmail(contact.email);
    setEditPhone(contact.phone);
  };

  const handleSave = (id: number) => {
    dispatch(editContact({ id, name: editName, email: editEmail, phone: editPhone }));
    setEditingId(null);
    setEditName('');
    setEditEmail('');
    setEditPhone('');
  };

  console.log('Rendering ContactList with contacts:', contacts);

  if (!Array.isArray(contacts)) {
    return <div>Erro: contatos não são uma lista válida. Tipo: {typeof contacts}</div>;
  }

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Card>
            {editingId === contact.id ? (
              <EditForm>
                <Titulo>Editar Contato</Titulo>
                <Input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Nome completo" required />
                <Input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="E-mail" required />
                <Input type="tel" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} placeholder="Telefone" required />
                <BarraAcoes>
                  <Button onClick={() => handleSave(contact.id)}>Salvar</Button>
                  <Button onClick={() => setEditingId(null)}>Cancelar</Button>
                </BarraAcoes>
              </EditForm>
            ) : (
              <>
                <Titulo>{contact.name}</Titulo>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <BarraAcoes>
                  <Button onClick={() => handleEdit(contact)}>Editar</Button>
                  <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
                </BarraAcoes>
              </>
            )}
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
