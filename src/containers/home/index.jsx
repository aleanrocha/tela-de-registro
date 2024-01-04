import {
  Form,
  InputLabel,
  Input,
} from './styles'

import { FaArrowRight } from 'react-icons/fa6'
import { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Main from '../../components/Main'
import ContainerItens from '../../components/ContainerItens'
import Title from '../../components/Title'
import Button from '../../components/Button'

const Home = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate()

  const handleAddUser = async (e) => {
    e.preventDefault()
    const { data: newUser } = await axios.post('https://api-register-users-six.vercel.app/users', {
      name: inputName.current.value,
      password: inputPassword.current.value,
    })
    setUsers([...users, newUser])
    navigate('/tela-de-registro/users')
  }

  return (
    <Main>
      <ContainerItens>
        <Title>Bem Vindo!</Title>
        <Form onSubmit={handleAddUser}>
          <InputLabel>
            Nome:
            <Input
              type='text'
              placeholder='Digite seu nome'
              required
              ref={inputName}
            />
          </InputLabel>
          <InputLabel>
            Senha:
            <Input
              type='password'
              placeholder='Digite sua senha'
              required
              ref={inputPassword}
            />
          </InputLabel>
          <Button type='Submit'>
            Cadastrar
            <FaArrowRight />
          </Button>
        </Form>
      </ContainerItens>
    </Main>
  )
}

export default Home
