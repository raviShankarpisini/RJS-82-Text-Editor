import styled from 'styled-components'

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 25px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BoldButton = styled.button`
  cursor: pointer;
  outline: none;
  color: ${props => (props.boldActive ? ' #faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled.button`
  cursor: pointer;
  outline: none;
  color: ${props => (props.underlineActive ? ' #faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  cursor: pointer;
  outline: none;
  color: ${props => (props.italicActive ? ' #faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  color: black;
  font-weight: ${props => (props.boldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.italicActive ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineActive ? 'underline' : 'normal')};
`
