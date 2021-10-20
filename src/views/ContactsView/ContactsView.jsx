import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import Section from 'components/Section';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
