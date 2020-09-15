import React,{useState} from 'react'
import { Container,Form,Button, Col,Row } from 'react-bootstrap'
import Input from './Input';
import {Redirect} from 'react-router-dom';
import {login} from '../../actions/authActions';
import {useDispatch,useSelector} from 'react-redux';
export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const userLogin=(e)=>{
        e.preventDefault();
        const user={
            email,password
        }
        dispatch(login(user));
    }
    if(auth.authenticate){
        return <Redirect to={`/`}/>
    }
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={{span:6,offset:3}}>
                    <Form onSubmit={userLogin}>
                        <Input 
                             label="Email Address"
                             type="email"
                             value={email}
                             placeholder="Enter your Email"
                             message="We'll never share your email with anyone else."
                             onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input 
                             label="Enter Password"
                             type="password"
                             value={password}
                             placeholder="Enter Password"
                             onChange={(e)=>setPassword(e.target.value)}
                        />

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
