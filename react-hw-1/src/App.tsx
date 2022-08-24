import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { User } from './components/User';

function App() {
  
  const submit = () => {
    alert('Ваши данные обрабатываются')
  }
  const createForm = () => {
    alert('Заполните форму')
  }

  return (
    <div className="App">
      <Title text={'Hello React!'}/>
      <Input type='text' placeholder='Введите логин'/>
      <Input type='text' placeholder='Введите пароль'/>
      <Input type='checkbox' text='Согласен на обработку данных'/>
      <Button disabled={false} onClick={submit} label='Отправить'/>
      <Button disabled={true} onClick={createForm} label='Регистрация'/>
      <User userName='Alexandra Pilevich'/>
    </div>
  );
}

export default App;
