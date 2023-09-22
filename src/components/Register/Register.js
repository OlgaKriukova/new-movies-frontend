import GeneralForm from '../GeneralForm/GeneralForm';

import './Register.css';

function Register() {
    return(
        <GeneralForm
          titleFormText = {'Добро пожаловать!'}
          existingInputs ={['name','email','password']}
          isNameExist = {true}
          isEmailExist = {true}
          buttonFormText = {'Зарегистрироваться'}
          questionFormText = {'Уже зарегистрированы?'}
          linkFormText = {'Войти'}
        />
    );
}

export default Register;