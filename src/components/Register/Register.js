import { Link } from 'react-router-dom';
import GeneralForm from '../GeneralForm/GeneralForm';

import './Register.css';

function Register() {
    return(
        <GeneralForm
          existingInputs ={['name','email','password']}
          isNameExist = {true}
          isEmailExist = {true}
        />
    );
}

export default Register;