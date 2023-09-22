import GeneralForm from '../GeneralForm/GeneralForm';

import './Login.css';

function Login() {
    return(
        <GeneralForm
        titleFormText = {'Рады видеть!'}
        existingInputs ={['email','password']}
        isEmailExist = {true}
        buttonFormText = {'Войти'}
        questionFormText ={'Ещё не зарегистрированы?'}
        linkFormText = {'Регистрация'}
      />
    );
}

export default Login;