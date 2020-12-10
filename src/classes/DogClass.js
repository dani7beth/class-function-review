import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export default class Dog extends React.Component{

state ={
  dogs: [
    {id: 1, name: "Penny", breed:"australian shepard"},
    {id: 2, name: "Phillip",breed:"chihuahua"},
    {id: 3, name: "Roger", breed: "dobermann"},
  ]
}


    render(){
        const {dogs} = this.state;
        
        return(
            <Container>
                <Header>Your Dogs as Class</Header>
                <List>
                    {dogs.map((d)=>{
                        return(
                            <List.Item key={d.id}>
                                {d.name} <br />
                                {d.breed} <br /> <br />
                            </List.Item>
                        )
                    })}
                </List>
            </Container>
        );
    }
}