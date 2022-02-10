
import{Form,FormGroup,Label,Col,Input,Button, Container,Row} from "reactstrap";
import { useReducer } from "react";
import { useState } from "react/cjs/react.production.min";


const Login = (props) => {
  const initialState = {
    email: "",
    password:"",
  };
  function reducer(state, action) {
    const {type ,payload} = action;
    switch (type) {
      case 'setEmail':
        return {
          ...state , email:payload
        };
      case 'setPassword':
        return {...state ,password:payload};
      case 'reset':
        return { ...initialState
        }
      default:
        return{state}
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const setEmail = (email) => {
    dispatch({type:"setEmail",payload:email});

  }
  const setPassword = (password) => {
    dispatch({type:"setPassword",payload:password});

  }
  const reset = () => {
    dispatch({type:"reset"});

  }
  const onSubmit = (event) => {
		event.preventDefault(); //to stop the default behavior of the form
     const loggedin = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: state.email, password: state.password }),
		};
		fetch("https://reqres.in/api/login", loggedin).then((response) => {
			if (response.status === 200) {
				console.log("Successfully logged in");
				props.nextPage();
			} else {
				alert("Wrong Input");
			}

		});
  };
    return(
    <Container className="text-centre col-md4">
        <Form onSubmit={onSubmit}>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          value = {state.email}
          onChange={(e)=>setEmail(e.target.value)}
          
        />
        <button type="button" onClick={()=>setEmail("")}>x</button>
      </FormGroup>
    </Col>
    
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
          value = {state.password}
          onChange={(p)=>setPassword(p.target.value)}
        />
         <button type="button" onClick={()=>setPassword("")}>x</button>
      </FormGroup>
    </Col>
  </Row>
 
  <Button type="submit">
    Login 
  </Button>
  <button type="button" onClick={reset}>reset</button>
</Form>
</Container>
    );
};
export default Login;