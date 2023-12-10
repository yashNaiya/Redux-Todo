import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, set } from '../store/listSlice';
import { addtoList } from '../store/loginSlice';
import api from '../Api';
const TodoList = () => {
  const dispatch = useDispatch();

  const user = useSelector(state=>state.login)
  
  useEffect(() => {
    dispatch(set(user.list))
  }, [user.list,dispatch])
  

  const list = useSelector(state=>state.list)


  const cards = list.map(list => (
    <Card className='col-md-5' style={{ width: '18rem', margin: '2rem' }}>
      <Card.Body>
        <Card.Title>{list.heading}</Card.Title>
        <Card.Text>
          {list.detail}
        </Card.Text>
        <Button onClick={()=>removeFromList(list.detail)} variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  ))

  const removeFromList = (detail)=>{
    api.post('/removeFromList',{userId:user._id,detail:detail})
    .then(()=>{
      
      dispatch(remove(detail))
    }).catch(err=>{
      console.log(err);
    })
  }
  const addToList = (input)=>{
    const data = {
      heading:"item",
      detail:input
    }
    // console.log(data)
      dispatch(addtoList(data))
      api.post('/addToList',{userId:user._id,data:data})
      .then(()=>{
        dispatch(add(data))
      }).catch(err=>{

      })
  }
  const [input, setinput] = useState("")
  return (
    <Col>
      <h1 className='text-center'>Todo-List</h1>
      <div className='d-flex justify-content-center'>
      <InputGroup style={{ width: '50%' }} className="col-md-5 m-3">
        <Form.Control
          value={input}
          onChange={(e)=>setinput(e.target.value)}
          placeholder="Todo item"
        />
        <Button onClick={()=>addToList(input)} id="add-btn">
          Button
        </Button>
      </InputGroup>
      </div>
      <Row>
        {cards}
      </Row>
    </Col>
  )
}

export default TodoList
