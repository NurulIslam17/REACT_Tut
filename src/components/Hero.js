import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/head.png'

const Hero = () => {

  const align_block = {
    textAlign:"justify"
  }
  const navigate = {
    position : "absolute",
    top:'70%',
    left:"25%"
  }
  return (
    <>
      <div className='py-3'>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img src={heroImg} alt="" className='w-100' />
            </div>
            <div className="col-md-6 pt-5">
              <h3>We are a GEEK Squad</h3>
              <p style={align_block}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sint recusandae tenetur
                 porro distinctio possimus aliquid mollitia enim quod similique labore architecto, 
                 voluptates ratione ad autem temporibus sequi asperiores itaque explicabo assumenda 
                 ipsam? Doloremque, at. Impedit reprehenderit aliquam, quibusdam tempora enim veniam 
                 maxime deleniti soluta ipsa magnam dolorum <br/> <br/> suscipit labore expedita, doloremque ipsu
                 m corrupti est in deserunt placeat vel dolore officiis. Aperiam animi delectus, a re
                 pudiandae quo aut nesciunt temporibus, ipsam voluptate nulla nostrum recusandae dese
                 runt odio sint adipisci? Recusandae iusto officia quod reprehenderit consequatur, cum 
                 architecto accusamus ullam doloremque maiores illo et soluta quasi quos hic at labore 
                 nulla amet perferendis eaqu</p>
            </div>
          </div>
        </div>
      </div>

      <div style={navigate}>
        <Link to='/contact' className='btn btn-sm btn-success rounded-0 me-3'>Contact</Link>
        <Link to='/project' className='btn btn-sm btn-warning rounded-0'>Project</Link>
      </div>
    </>
  )
}

export default Hero