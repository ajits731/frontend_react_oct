import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createRef, useEffect} from 'react';
import {handleLogin} from '../action/action';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Login() {
    const email_ref = createRef(null);
    const password_ref = createRef(null);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.counter.userAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) {
            navigate('/home', {replace: true})
        }
    }, [isAuth])
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log('Login formData:', email_ref.current.value, password_ref.current.value);
        dispatch(handleLogin({email:email_ref.current.value, password: password_ref.current.value}));
        
    }
  return (
    <Form id="login-form" onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email_ref} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password_ref} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;