import styled from 'styled-components'

export const Ul = styled.ul`
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;
`
export const List =  styled.li`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  grid-gap: .4rem;
  
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  border-radius: 0.875rem;
  padding: 1.25rem;
  border: none;
  outline: none;

  & > svg {
    cursor: pointer;
  } 
`
export const Text = styled.p`
  font-weight: 700;
  font-size: 1rem;
  overflow: auto;
`