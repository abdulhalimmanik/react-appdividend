import React, { Component } from 'react';
import styled from 'styled-components'

const Blog = styled.h1`
  text-align: center;
  color: skyBlue;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'green' : 'white'};
  color: ${props => props.primary ? 'white' : 'green'};
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 5px;
  margin: 10px 10px 10px 10px
`;

class App extends Component {
    render() {
        return (
            <>
                <Blog>AppDividend</Blog>
                <Button primary="styled">Styled</Button>
                <Button>Plain</Button>
            </>
        );
    }
}

export default styled(App)`
  background-color: #232020;
  border-radius: 5px;
`;