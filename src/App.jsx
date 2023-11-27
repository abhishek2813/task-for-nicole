import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './comp/column';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './comp/Card';
import AddTask from './comp/AddTask';

function App() {
  const [idCount, setIdCount] = useState(1)
  const [task, setTask] = useState([{
    id:0,
    name:"task 1",
    status:"pending",
    dece:"this is task for intview gs"
  }])
  
  const handleAddTask = (name,status,dece)=>{
    // console.warn("add task");
    const updateArr = [...task,{id:idCount,name,status,dece}]
    setTask(updateArr)
    setIdCount((prev)=>prev+1)
  }
  
  const updateTask = (taskId,status)=>{
    
   const updateArr = task.map((item)=>{
    if(item.id===taskId){
       item = {...item,status:status}
    }
     return item
   })
   setTask(updateArr);
  }
  // console.warn(task);

  const filterPendingArr = task.filter((item)=>item.status==="pending")
  const filterHoldArr = task.filter((item)=>item.status==="hold")
  const filterProgressArr = task.filter((item)=>item.status==="progress")
  const filterCompleteArr = task.filter((item)=>item.status==="complete")

  return (
    <>
    <Container fluid>
      <Row>
      <Col xs={6} className='shadow-lg mb-5 bg-white m-3'>
        <Column text="Add Task"/>
        <AddTask handleAddTask={handleAddTask}/>
        </Col>
      </Row>
      <Row>
        <Col xs={3} >
        <Column text="pending" type="primary"/>
        {filterPendingArr.map((item)=>(
          <Cards name={item.name} dece={item.dece} status={item.status} key={item.id} updateTask={updateTask}/>
        ))}
        </Col>
        <Col xs={3}><Column text="On hold" type="danger"/>
        {filterHoldArr.map((item)=>(
          <Cards name={item.name} dece={item.dece} status={item.status} key={item.id} updateTask={updateTask}/>
        ))}
        </Col>
        <Col xs={3}><Column text="In Progress" type="warning"/>
        {filterProgressArr.map((item)=>(
          <Cards name={item.name} dece={item.dece} status={item.status} key={item.id} updateTask={updateTask}/>
        ))}
        </Col>
        <Col xs={3}><Column text="Is complete" type="success"/>
        {filterCompleteArr.map((item)=>(
          <Cards name={item.name} dece={item.dece} status={item.status} key={item.id} updateTask={updateTask}/>
        ))}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
