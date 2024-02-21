import './Contactme.css'
import { Form} from 'react-bootstrap';

function Contactme(props) {
  
  return (
    < >
      <form name='contact' netlify>
      <h1 className='text-white text-center title mt-5'   id='contact-me'>Contact Me</h1>
      <Form  className=' p-3 text-white form ' netlify>
        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="email" placeholder="name@example.com" style={{ padding:'10px',width:'100%'}} className='email'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          
          <Form.Control type="email" placeholder="Your Names" style={{ padding:'10px',width:'100%'}} className='name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
          
          <Form.Control as="textarea" rows={6} style={{padding:'10px'}} placeholder='Type your message here...' className='message'/>
        </Form.Group>
        <Form.Group className="mb-3 fbtn" controlId="exampleForm.ControlButton" >
        <button  type="submit" className='mb-4 btn-sub'>Submit</button>
      </Form.Group>
      </Form>
      </form>
      
      
     
      
    </>
  )
}

export default Contactme
