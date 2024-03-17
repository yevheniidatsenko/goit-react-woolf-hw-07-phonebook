## Phonebook Application

This is a simple React application for managing contacts in a phonebook.

### Features

- Add new contacts with a name and phone number.
- Display a list of contacts.
- Filter contacts by name.
- Responsive design for various screen sizes.

### Components

- **App**: The root component managing the state of contacts and filter.
- **ContactForm**: Component for adding new contacts.
- **ContactList**: Component for displaying the list of contacts.
- **Filter**: Component for filtering contacts by name.

### Technologies Used

- React
- Redux Toolkit
- React Redux
- Redux Persist
- CSS Modules

#### Phonebook Contact Storage

In this updated version, the phonebook application now utilizes Redux Toolkit
along with Redux Persist for storing contacts in local storage.

- Redux Toolkit is used for managing the Redux state.
- Redux Persist is used to save an array of contacts to local storage.

The Redux state is structured as follows:

```javascript
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

Redux Toolkit's `configureStore()` is used to create the Redux store. The state
is managed using `createSlice()` to define reducers for saving and deleting a
contact, as well as updating the filter.

React components are connected to the Redux logic using hooks provided by the
`react-redux` library.

Lifecycle methods in React are utilized for automatically saving contacts to
local storage when a contact is added or deleted. Upon loading the app,
contacts, if any, are retrieved from local storage and stored in the application
state.

### Backend

Create your own personalized backend for development with the mockapi.io UI
service. Sign up with your GitHub account. Create a contacts resource to get the
`/contacts` endpoint. Use the resource constructor and describe the contact
object as in the illustration.

#### Contact schema

```javascript
{
  name: String,
  phone: String
}
```

#### State form

Add loading and error indicator handling to the Redux state. To do this, change
the state form.

```javascript
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

#### Operations

Use the `createAsyncThunk` function to declare asynchronous action generators
and execute HTTP requests. Use `createSlice` to process actions and change data
in the Redux state.

Declare the following operations:

- `fetchContacts`: getting an array of contacts (GET method) by request. The
  basic action type is "contacts/fetchAll".
- `addContact`: adding a contact (POST method). The basic action type is
  "contacts/addContact".
- `deleteContact`: deleting a contact (DELETE method). The basic action type is
  "contacts/deleteContact".
