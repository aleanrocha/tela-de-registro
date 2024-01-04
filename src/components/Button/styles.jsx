import styled from 'styled-components'

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  width: 100%;
  background-color: ${props => props.$isBack ? 'transparent' : '#040033'};
  color: #fff;
  border-radius: 0.875rem;
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.75rem;
  padding: 1.2rem;
  margin-top: ${props => props.$isBack && '2rem'};
  border: ${ props => props.$isBack ? '1px solid #FFF' : 'none'};
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: ${ props => props.$isBack ? '#0a014332' : '#0a0143'};
  }
`

export default Btn