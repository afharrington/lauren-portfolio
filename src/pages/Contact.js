import React, { Component } from 'react'
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    console.log('worked');
    // alert(this.state.email);

  }


  render() {
    return (
      <View>
        <SectionHeader><h1>Contact Me</h1></SectionHeader>
        <form action="https://formspree.io/anna@pineappleny.com" method="POST">
          <FormElement>
            <label>
              Name
            </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
          </FormElement>

          <FormElement>
            <label>
              Email
            </label>
            <input type="email" name="_replyto" value={this.state.email} onChange={this.handleEmailChange} />
          </FormElement>

          <MessageInput>
            <label>
              Message
            </label>
            <textarea type="text" name="message" value={this.state.message} onChange={this.handleMessageChange} />
          </MessageInput>

          <input type="hidden" name="_next" value="/thankyou" />

          <Submit>
            <input onClick={this.handleSubmit} type="submit" value="Send"/>
          </Submit>
        </form>
      </View>
    )
  }
}

const View = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 200px;
  font-family: 'Share', sans-serif;
`;

const SectionHeader = styled.div`
  width: 100%;
  text-align: center;
  color: white;

  h1 {
    // text-transform: uppercase;
    font-family: 'Share', sans-serif;
  }
`;

const FormElement = styled.div`

  label {
    color: white;
    display: block;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 5px;
    
    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
    }
  }

  input {
    height: 45px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    display: block;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
    }
  }
`;

const MessageInput = styled.div`
  display: block;

  label {
    color: white;
    display: block;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 3px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
    }
  }

  textarea {
    border: none;
    border-radius: 3px;
    height:150px;
    padding: 10px;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
    }
  }
`;

const Submit = styled.div`

  input {
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    width: 50%;
    margin-left: 25%;
    border-radius: 3px;
    border: none;
    background-color: #B89031;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
    }
  }
`;

export default Contact;