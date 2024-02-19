import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
function App() {
  const getValidationSchema = () => {
    return Yup.object({
      name: Yup.string().required('Name is required').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      MiddleName: Yup.string().required('Middle Name is required').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      LastName: Yup.string().required('Last Name is required').min(2).matches(/^[A-Za-z]+$/, 'Only letters are allowed'),
      email: Yup.string().required('Email is required').email('Invalid email format'),
      password: Yup.string().min(4).max(10).required('Enter password is required'),
      cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm password is required'),
      select: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      gender: Yup.string().required('Gender is required'),
      birthdate: Yup.date().required('Birth Date is required').max(new Date(), 'Birth Date must be in the past'),
      number: Yup.string().matches(/^(\+91-?)?[6789]\d{9}$/,'Number Format is Not Valid').required('Number is required').max(10),
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
    state:'',
    gender: '',
    birthdate: '',
    number: '',
  }

  let { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: init,
    validationSchema: getValidationSchema,
    onSubmit: (value) => {
      console.log(value);
    }
  }, [])

  let cities = ['Ahmadabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Bharuch'];
  let states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Goa","Gujarat","Haryana","Jharkhand","Karnataka","Kerala"]
  return (
    <Container className='bg-dark text-white py-5' fluid>
      <Form onSubmit={handleSubmit} data-bs-theme="dark" >
        <Row>
          <Col md>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" id="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
             <div className='errorLine'> {touched.name && errors.name && <div className="error">{errors.name}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="MiddleName">Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter MiddleName" id="MiddleName" name="MiddleName" onChange={handleChange} onBlur={handleBlur} value={values.MiddleName} />
              <div className='errorLine'>{touched.MiddleName && errors.MiddleName && <div className="error">{errors.MiddleName}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
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
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              <div className='errorLine'>{touched.password && errors.password && <div className="error">{errors.password}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="cpassword">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" id="cpassword" name="cpassword" onChange={handleChange} onBlur={handleBlur} value={values.cpassword} />
              <div className='errorLine'>{touched.cpassword && errors.cpassword && <div className="error">{errors.cpassword}</div>}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control as="select" placeholder="Enter Select" id="select" name="select" onChange={handleChange} onBlur={handleBlur} value={values.select}>
                <option value='' label='Select City'></option>
                {cities.map((city) => (
                  <option key={city} value={city} label={city} />
                ))}
              </Form.Control>
              <div className='errorLine'>{touched.select && errors.select && <div className="error">{errors.select}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="state">state</Form.Label>
              <Form.Control as="select" placeholder="Enter state" id="state" name="state" onChange={handleChange} onBlur={handleBlur} value={values.state}>
                <option value='' label='Select state'></option>
                {states.map((state) => (
                  <option key={state} value={state} label={state} />
                ))}
              </Form.Control>
              <div className='errorLine'>{touched.state && errors.state && <div className="error">{errors.state}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="state">Gender</Form.Label>
              <div className="d-flex gap-3">
              <Form.Check  label="Male" type='radio' name="gender" value='male' onChange={handleChange} onBlur={handleBlur} />
              <Form.Check  label="Female" type='radio' name="gender" value='female' onChange={handleChange} onBlur={handleBlur} />
              </div>
              <div className='errorLine'>{touched.gender && errors.gender && <div className="error">{errors.gender}</div>}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthdate">Birthdate</Form.Label>
              <Form.Control type="date" id="birthdate" name="birthdate" onChange={handleChange} onBlur={handleBlur} value={values.birthdate} />
              <div className='errorLine'>{touched.birthdate && errors.birthdate && <div className="error">{errors.birthdate}</div>}</div>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthdate">Mobile Number</Form.Label>
              <Form.Control type="text" id="number" name="number" placeholder='Enter Mobile Number' onChange={handleChange} onBlur={handleBlur} value={values.number} />
              <div className='errorLine'>{touched.number && errors.number && <div className="error">{errors.number}</div>}</div>
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
