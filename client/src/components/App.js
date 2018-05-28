import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button, Alert} from 'reactstrap';
import fire from '../fire';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user  : "User1ID", 
        dispVal: "",
        friends: "None"
    }
    fire.database().ref(this.state.user+"/Friends").once("value").then( (snapshot) => {
      this.setState({friends: snapshot.val()})
    })
  }

  handleAddFriend =(event) => {
    const friend_val = document.getElementById('friend_id').value
    var updates = {}
    var updates2 = {}
    updates['/Friends'] = friend_val
    updates2['/Friends'] = this.state.user
    fire.database().ref(this.state.user).update(updates)
    fire.database().ref(friend_val).update(updates2)
    fire.database().ref(this.state.user+"/Friends").once("value").then( (snapshot) => {
      this.setState({friends: snapshot.val()})
    })
  }

  genFriendCode = (event) => {
    this.setState({dispVal: this.state.user})
    var textField = document.createElement('textarea')
    textField.innerText = this.state.user
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  userSwap =(event) => {
    var temp = ""
    if (this.state.user === "User1ID")
    {
      this.setState({user: "User2ID"})
      temp = "User2ID"
    }
    else
    {
      this.setState({user: "User1ID"})
      temp = "User1ID"
    }
    fire.database().ref(temp+"/Friends").once("value").then( (snapshot) => {
      this.setState({friends: snapshot.val()})
    })
  }

  removeFriend = (event) => {
    const friend_val = this.state.friends
    var updates = {}
    var updates2 = {}
    updates['/Friends'] = "None"
    fire.database().ref(this.state.user).update(updates)
    fire.database().ref(friend_val).update(updates)

    fire.database().ref(this.state.user+"/Friends").once("value").then( (snapshot) => {
      this.setState({friends: snapshot.val()})
    })
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                  <Form>
                    <Button color="success" onClick={this.genFriendCode}>Generate Friend Code</Button>
                    <Alert color="success" id="copyID">{this.state.dispVal}</Alert>
                    <br />
                    <Button color="primary" onClick={this.handleAddFriend}>Add Friend</Button>
                    <Input type="text" name="link" id="friend_id" placeholder="Friend ID" /><br/>
                    <Button color="danger" onClick={this.removeFriend}>Remove Friend</Button><br/>
                    <Button color="warning" onClick={this.userSwap}>Swap User</Button>
                  </Form>
                </Col>
                <Col>
                    <Alert color="primary">Currently {this.state.user}</Alert>
                    <Alert color="info">Current Friends: {this.state.friends}</Alert>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
