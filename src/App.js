import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'

import {
  Heading,
  MainContainer,
  SubContainer,
  BoldButton,
  UnderlineButton,
  ItalicButton,
  TextArea,
} from './styledComponents'

// Replace your code here

class App extends Component {
  state = {boldActive: false, underlineActive: false, italicActive: false}

  onClickBold = () =>
    this.setState(prevState => ({
      boldActive: !prevState.boldActive,
    }))

  onClickUnderline = () =>
    this.setState(prevState => ({
      underlineActive: !prevState.underlineActive,
    }))

  onClickItalic = () =>
    this.setState(prevState => ({
      italicActive: !prevState.italicActive,
    }))

  render() {
    const {boldActive, underlineActive, italicActive} = this.state
    return (
      <MainContainer>
        <MainContainer>
          <SubContainer>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </SubContainer>
          <SubContainer>
            <ul>
              <li>
                <BoldButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  boldActive={boldActive}
                  type="button"
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>

              <li>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italicActive={italicActive}
                  type="button"
                >
                  <GoItalic />
                </ItalicButton>
              </li>

              <li>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  type="button"
                  underlineActive={underlineActive}
                >
                  <AiOutlineUnderline />
                </UnderlineButton>
              </li>
            </ul>
            <TextArea
              underlineActive={underlineActive}
              italicActive={italicActive}
              boldActive={boldActive}
            />

            {/* </TextArea> */}
          </SubContainer>
        </MainContainer>
      </MainContainer>
    )
  }
}

export default App
