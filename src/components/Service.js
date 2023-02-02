import React from 'react'
import AboutImage from '../assets/consuting.jpg'

const Service = () => {

  const align_block = {
    textAlign: "justify",
  };
  return (
    <>
        <div className="py-3">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <h3>What we provide</h3>
              <ul>
                <li> <p style={align_block}>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Nobis
                sint recusandae tenetur porro 
                distinctio possimus aliquid</p></li>

                <li><p style={align_block}>
                mollitia enim quod similique la
                bore architecto, voluptates
                ratione ad autem temporibus seq
                ui asperiores itaque explicabo
                assumenda ipsam? Doloremque, at. Impe</p></li>

                <li><p style={align_block}>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Nobis
                sint recusandae tenetur porro 
                distinctio possimus aliquid</p>
                </li>
                <li><p style={align_block}>dit reprehenderit aliquam,
                quibusdam tempora enim veniam maxime deleniti soluta ipsa magnam
                dolorum suscipit labore expedita, doloremque ipsu
                m corrupti est in deserunt placeat vel dolore officiis. Aperiam
                animi delectus, a re pudiandae</p></li>
              </ul>
              
                 <p style={align_block}>
                 quo aut nesciunt temporibus,
                ipsam voluptate nulla nostrum recusandae dese runt odio sint
                adipisci? Recusandae iusto officia quod reprehenderit
                consequatur, cum architecto accusamus ullam doloremque maiores
                illo et soluta quasi quos hic at labore nulla amet perferendis
                eaqu
             
                 </p>
            </div>

            <div className="col-md-6">
              <img src={AboutImage} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service