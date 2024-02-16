import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
function App() {
  const getValidationSchema = () => {
    return Yup.object({
      email: Yup.string().required('Enter email').email('Invalid email format'),
      password: Yup.string().min(4).max(10).required('Enter password'),
      cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm password'),
    });
  };

  let init = {
    email: '',
    password:'',
    cpassword:'',
  }
  let {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
    initialValues: init,
    validationSchema:getValidationSchema,
    onSubmit : (value) =>{
      console.log(value);
    }
  },[])
  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
        {touched.email && errors.email && <div className="error">{errors.email}</div>}
      </Form.Group>
      <Row>
      <Col>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {touched.password && errors.password && <div className="error">{errors.password}</div>}
          </Form.Group>
        </Col>
      <Col>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" id="cpassword" name="cpassword" onChange={handleChange} onBlur={handleBlur} value={values.cpassword} />
            {touched.cpassword && errors.cpassword && <div className="error">{errors.cpassword}</div>}
          </Form.Group>
        </Col>  
    </Row>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  );
}

export default App;
