import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
function App() {
  const getValidationSchema = () => {
    return Yup.object({
      name: Yup.string().required('Enter Name').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      MiddleName: Yup.string().required('Enter Middle Name').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      LastName: Yup.string().required('Enter Last Name').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      email: Yup.string().required('Enter email').email('Invalid email format'),
      password: Yup.string().min(4).max(10).required('Enter password'),
      cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm password'),
      select: Yup.string().required('Select a City option'),
    });
  };

  let init = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    MiddleName:'',
    LastName:'',
    select : '',
  }

  let { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: init,
    validationSchema: getValidationSchema,
    onSubmit: (value) => {
      console.log(value);
    }
  }, [])

  let cities = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Bharuch'];
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" id="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
             <div className='errorLine'> {touched.name && errors.name && <div className="error">{errors.name}</div>}</div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="MiddleName">Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter MiddleName" id="MiddleName" name="MiddleName" onChange={handleChange} onBlur={handleBlur} value={values.MiddleName} />
              <div className='errorLine'>{touched.MiddleName && errors.MiddleName && <div className="error">{errors.MiddleName}</div>}</div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="LastName">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" id="LastName" name="LastName" onChange={handleChange} onBlur={handleBlur} value={values.LastName} />
              <div className='errorLine'>{touched.LastName && errors.LastName && <div className="error">{errors.LastName}</div>}</div>
            </Form.Group>
          </Col>
        </Row>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
          <div className='errorLine'>{touched.email && errors.email && <div className="error">{errors.email}</div>}</div>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              <div className='errorLine'>{touched.password && errors.password && <div className="error">{errors.password}</div>}</div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="cpassword">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" id="cpassword" name="cpassword" onChange={handleChange} onBlur={handleBlur} value={values.cpassword} />
              <div className='errorLine'>{touched.cpassword && errors.cpassword && <div className="error">{errors.cpassword}</div>}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="city">Confirm Password</Form.Label>
              <Form.Control as="select" placeholder="Enter Select" id="select" name="select" onChange={handleChange} onBlur={handleBlur} value={values.select}>
                <option value='' label='Select City'></option>
                {cities.map((city) => (
                  <option key={city} value={city} label={city} />
                ))}
              </Form.Control>
              <div className='errorLine'>{touched.select && errors.select && <div className="error">{errors.select}</div>}</div>
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
