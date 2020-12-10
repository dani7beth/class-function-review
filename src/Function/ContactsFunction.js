import Axios from 'axios';
import {useState, useEffect} from 'react';
import { Header, List, Card, Image } from 'semantic-ui-react';

const ContactsFunction = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        Axios.get('https://reqres.in/api/users?')
        .then((res)=>{
            setData(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        });

        return () =>{
            console.log("cleanup");

        };

    }, []);

    const renderData = () =>{
       return(<List>
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
    ); 
    };

    return(
        <>
        <Header>Contacts as Function</Header>
        {renderData()}
        </>
    );

};
export default ContactsFunction;