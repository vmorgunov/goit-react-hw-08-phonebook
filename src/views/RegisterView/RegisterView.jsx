import { Button } from 'components/_share/Button.styled';
import { Form, Label } from 'components/_share/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    toast.success(`Thank you for registering`);
  };

  return (
    <div>
      <h1>Registration</h1>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  );
}
