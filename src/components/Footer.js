import React from 'react'
import Vector from './img/Vector.png';
import I4G from './img/I4G.png';
import Vector_2 from './img/Vector_2.png'

function Footer() {
  return (
    <>
    <div className='container'>
      <div className=''>
        <div className=''>
          <div className=''>

          <div className='footerContent'>
          <div class="row d-flex justify-content-between">
            <div class="col-sm-3"><img src={Vector} />
            <img src={Vector_2} className='Vector_2'/>
            </div>
            <div class="col-6">
            <div className='footerText'> 
              HNG Internship 9 Frontend Task
            </div>
            </div>
             <div className="col-sm-2">
              <img src={I4G}/> 
            </div>
            </div>
          </div>
        </div>
      </div>