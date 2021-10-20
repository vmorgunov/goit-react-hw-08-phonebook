import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Titel, Button, List, Item } from './ContactList.styled';
import { BsFillPersonFill, BsFillTrashFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts/';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContacts = id => dispatch(contactsOperations.deleteContact(id));
  return (
    <>
      {!isLoading ? (
        error ? (
          <h3>Sorry, an error occurred: {error}</h3>
        ) : (
          <List>
            {contacts.map(({ id, name, number }) => (
              <Item key={id} id={id}>
                <BsFillPersonFill size={30} />
                <span>{name}:</span> <span>{number}</span>
                <Button
                  type="button"
                  onClick={() => {
                    onDeleteContacts(id);
                  }}
                >
                  <BsFillTrashFill size={20} />
                </Button>
              </Item>
            ))}
          </List>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
