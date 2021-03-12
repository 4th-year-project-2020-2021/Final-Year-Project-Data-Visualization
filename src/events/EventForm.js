import React, {useState} from 'react';
import { Form, Segment, Header, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen, setEvents}) {
    const initialValues ={
        title: ''
    }

    const [values, setValues] = useState('initialValues');

    function handleFormSubmit(){
        console.log(values);
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]:value })
    }

    return (
        <Segment clearing>
            <Header contents='Create new event' />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                        type='text' 
                        placeholder='Event title' 
                        name='title'
                        value={values.title} 
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button
                    onClick={()=>setFormOpen(false)}
                    type='submit'
                    floated='right'
                    content='Cancel'
                />
            </Form>
        </Segment>
    )
}