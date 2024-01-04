import styled from 'styled-components'
import image from '../../assets/background-gradient.jpg'

const MainContainer = styled.main`
  background: #030027 url('${image}') top right no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`

export default MainContainer