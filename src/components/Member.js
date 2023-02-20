import React from "react";
import member from "../assets/malee.png";

function Member() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 mx-auto p-3">
            <div className="card card-body rounded-0 shadow">
              <div className="row">
                <div className="col-md-4">
                  <img src={member} alt=""/>
                  <p className="text-center"><strong>Abir Hasan</strong> </p>
                </div>
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-6 pt-3 pe-4">
                  <p><strong>Profession : </strong> Softwer Engineer</p>
                  <p><strong>Education : </strong> B.Sc in CSE</p>
                  <p><strong>Institute : </strong> MIT</p>
                  <p><strong>Email : </strong> abc@gmail.com</p>
                  <p><strong>Address : </strong> Dhaka,Bangladesh</p>
                </div>
              </div>
              <div className="row">
                <p style={{ textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem vero quaerat illum impedit iure omnis aperiam labore quia eaque consequuntur autem doloribus mollitia tempora eligendi incidunt placeat maiores, sunt accusamus repellendus fugiat atque! Soluta non, mollitia recusandae ut ipsam maxime, officiis sint maiores delectus pariatur praesentium consectetur saepe libero aspernatur? Facilis culpa animi ipsam blanditiis incidunt. Repudiandae nulla distinctio doloremque ipsa neque est. Minus repellat totam consequatur distinctio. Totam qui magnam consectetur iusto culpa fugiat quia deserunt cum hic. Error, at ipsum. Tempora, inventore libero illum unde assumenda ea. Tempore eligendi quos, ipsa ut voluptatibus, sint autem ad neque repellendus cupiditate numquam dicta? Recusandae, eius tempora quidem temporibus mollitia soluta. Quod corporis ea sequi molestias inventore quasi. Quibusdam eaque aliquam ut, dolores repudiandae, nulla aut, sit ratione provident architecto ipsam impedit eos amet est libero non sed totam velit dolore perspiciatis? Beatae sed ut architecto qui nulla, vitae id totam facere veritatis obcaecati minima veniam incidunt libero. Sint vel amet laboriosam molestiae consectetur quas repudiandae ad dolore tempora provident dolorum commodi, quae voluptate natus ipsum odio accusamus rem! Enim temporibus, pariatur porro nostrum corrupti iste quidem. Vel qui, nisi nostrum accusantium molestias veritatis molestiae voluptatum vero repudiandae optio vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
