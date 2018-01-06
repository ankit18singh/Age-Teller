import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats';

const formStyle = {
    padding: '5px',
    textAlign: 'center',
    fontSize: '16px'
}

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            newDate: '',
            birthday: '1995-06-15',
            showStats: false
        }
    }

    changeBirthday() {
        if (this.state.newDate !== '') {
            console.log(this.state);
            this.setState({
                birthday: this.state.newDate,
                showStats: true
            });
        }
    }

    render(){
        return(
            <div style = {formStyle}>
                <Form inline>
                    <h2>Age Teller</h2>
                    <FormControl 
                        type="date"
                        onChange = {event => this.setState({newDate: event.target.value})} 
                    >    
                    </FormControl> 
                    {' '}
                    <Button onClick = {() => this.changeBirthday()}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ? 
                        <AgeStats date={this.state.birthday}/> : ''
                    }

                </Form>
            </div>
        );
    }
}