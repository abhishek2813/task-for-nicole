import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function AddTask({handleAddTask}) {
    const [name,setName]=useState("")
    const [dece,setDece]=useState("")
    const [status,setStatus]=useState("pending")

    const handleAdd = ()=>{
        handleAddTask(name,status,dece)
        setName("")
        setDece("")
        setStatus("pending")
    }
  return (
    <div>
       <Form.Label htmlFor="name">Task Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setName(e.target.value)}
        value={name}
      />
      <Form.Label htmlFor="dece">Task Dece</Form.Label>
      <Form.Control
        type="text"
        id="dece"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setDece(e.target.value)}
        value={dece}
      />
      <Form.Select aria-label="Selected task state" className='my-3' onChange={(e)=>setStatus(e.target.value)}>
             <option selected value={status}>{status}</option>
            <option value="pending">pending</option>
            <option value="hold">hold</option>
            <option value="progress">progress</option>
            <option value="complete">complete</option>
          </Form.Select>
      <Button className='my-3' onClick={handleAdd}>Add</Button>
    </div>
  )
}

export default AddTask