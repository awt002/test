/**
 * UI for testing functionality of PetersComponent 
 * @author chumothyLee
 */
import React, { Component } from 'react';
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';
import { GithubPicker } from 'react-color';
import PetersComponent from './PetersComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        color : '#000',
        times : 1
    }
  }

  /**
   * Updates component's state.color value when user selects a new color on GithubPicker
   * @public
   * @param {color} color New color value for PetersComponent. Use hex key.
   * @returns {null}
   */
  handleChange = (color) => {
    console.log(color);
    this.setState({ color : color.hex });
  }

  /**
   * Updates component's state.time value when user inputs numerical value to #timeSelector
   * @public
   * @param {*} event Event from which to take update number value
   * @returns {null}
   */
  handleTimeChange = (event) => {
    const times = event.target.value;
    console.log(times);
    if (!isNaN(times) && times > 0) {
      this.setState({ times : event.target.value });
    }
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                  <Form>
                    <Label for="colorPicker"> Color of text </Label>
                    <GithubPicker id="colorPicker" color={this.state.color} onChange={this.handleChange}/>
                    <Label for="timesSelector"> Times to print text </Label>
                    <Input id="timesSelector" type="textarea" onChange={this.handleTimeChange}/>
                  </Form>
                </Col>
                <Col>
                    <PetersComponent color={this.state.color} times={this.state.times}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
