import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #eee;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
`
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  border-radius: 0.875rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.9375rem 1.25rem 0.9375rem 1.5625rem;
  border: none;
  outline: none;

  &::placeholder {color: #fff;}
`