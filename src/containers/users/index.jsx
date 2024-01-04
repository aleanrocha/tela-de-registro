import {
  Ul,
  List,
  Text,
} from './styles'

import { FaArrowLeftLong, FaRegTrashCan } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Main from '../../components/Main'
import ContainerItens from '../../components/ContainerItens'
import Title from '../../components/Title'
import Button from '../../components/Button'

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const baseURL = 'https://api-register-users-six.vercel.app'

  useEffect(() => {
    const getUsers = async () => {
      const { data: allUsers } = await axios.get(`${baseURL}/users`)
      setUsers(allUsers)
    }
    getUsers()
  }, [])

  const handleDeleteUser = async (userId) => {
    const newUserList = users.filter(user => user.id !== userId)
    setUsers(newUserList)
    if(newUserList.length === 0) {
      navigate('/tela-de-registro')
    }
    await axios.delete(`${baseURL}/users/${userId}`)
  }

  return (
    <Main>
      <ContainerItens>
        <Title>Usuários</Title>
        <Ul>
          {users.map((user) => (
            <List key={user.id}>
              <Text>N: {user.name}</Text>
              <Text>S: {user.password}</Text>
              <FaRegTrashCan onClick={() => handleDeleteUser(user.id)}/>
            </List>
          ))}
        </Ul>
        <Button type='button' onClick={() => navigate('/tela-de-registro')} $isBack={true}>
          <FaArrowLeftLong />
          Voltar
        </Button>
      </ContainerItens>
    </Main>
  )
}

export default Users
