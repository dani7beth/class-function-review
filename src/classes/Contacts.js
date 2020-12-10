import React from 'react';
import Axios from 'axios';
import { Card, Header, Image, List } from 'semantic-ui-react';

export default class Contacts extends React.Component{
    //[{"id":1,"email":"george.bluth@reqres.in",
    //"first_name":"George","last_name":"Bluth",
    //"avatar":"https://reqres.in/img/faces/1-image.jpg"}

    state = {data: []};
    
    componentDidMount(){
        Axios.get('https://reqres.in/api/users?')
        .then((res)=>{
            this.setState({data: res.data.data});
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log("error fetching data");
        });
    }
        
    

    render (){
        const {data} = this.state;
        return (
            <>
            <Header as="h3">Contacts as Class</Header>
            <List>
                {data.map(d=>{
                    return (
                        <Card.Group>
                        <Card>
                          <Card.Content>
                            <Image
                              floated='right'
                              size='mini'
                              src={d.avatar}
                            />
                            <Card.Header>{d.first_name}  {d.last_name}</Card.Header>
                            <Card.Meta>{d.email}</Card.Meta>
                          </Card.Content>
                        </Card>
                      </Card.Group>
                    );
                })}
            </List>
            </>
        );
    };
}