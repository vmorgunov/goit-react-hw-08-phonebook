import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],

  (contacts, filter) => {
    const normalizedContacts = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts),
    );
    return filteredContacts;
  },
);
