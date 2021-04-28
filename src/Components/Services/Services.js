import React from 'react';
import './Services.css';
import ServImg1 from '../../img/icons/middle-1.png';
import ServImg2 from '../../img/icons/middle-2.png';
import ServImg3 from '../../img/icons/middle-3.png';
import { useState } from 'react';


function Services() {
  const [cards, setcards] = useState([]);
  const [textBtn, settextBtn] = useState('ALL SERVICES')
  const [revers, setrevers] = useState(true)

  function showMore () {
    if(revers) {
      setcards(
        <div className="serv__cards">
          <div className="serv__card">
            <img src={ServImg1} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
            <p className="serv__card__text">Project and construction management should not start with the choice of a general contractor a f much earlier, at the stage of pre-project preparation of the project and development. CONSTRUCT specialists carry out the work of designers, check design solutions and control the results of their work.</p>
          </div>
          <div className="serv__card">
            <img src={ServImg2} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">STRUCTURE AUDIT AND MAINTENANCE</h3>
            <p className="serv__card__text">The material costs for the construction of objects are not only large, but also quite complex in structure. An audit is often required to obtain the true value of a building. Such funds allow to reliably protect agents' funds, to optimize the costs of the customer of construction work.</p>
          </div>
          <div className="serv__card">
            <img src={ServImg3} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">FACTORY CONSTRUCTION AND MODELING</h3>
            <p className="serv__card__text">BIM technology connects people and technical solutions to optimize time and money, and improve the comfort and efficiency of buildings, whether they are skyscrapers, hospitals, offices or residential complexes.</p>
          </div>
        </div>
      )
      settextBtn('Hide')
      setrevers(rev => !rev)
    }else{
      setrevers(rev => !rev)
      settextBtn('ALL SERVICES')
      setcards([])
    }
  }

  return (
      <section className="services">
        <div className="container">
          <div className="serv__top">
            <h2 className="serv__title">OUR CAPABILITIES</h2>
            <button  className="btn serv__btn" onClick={showMore}>{textBtn}</button>
          </div>
          
          <div className="serv__cards">
          <div className="serv__card">
            <img src={ServImg1} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
            <p className="serv__card__text">Project and construction management should not start with the choice of a general contractor a f much earlier, at the stage of pre-project preparation of the project and development. CONSTRUCT specialists carry out the work of designers, check design solutions and control the results of their work.</p>
          </div>
          <div className="serv__card">
            <img src={ServImg2} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">STRUCTURE AUDIT AND MAINTENANCE</h3>
            <p className="serv__card__text">The material costs for the construction of objects are not only large, but also quite complex in structure. An audit is often required to obtain the true value of a building. Such funds allow to reliably protect agents' funds, to optimize the costs of the customer of construction work.</p>
          </div>
          <div className="serv__card">
            <img src={ServImg3} alt="" className="serv__card__img"/>
            <h3 className="serv__card__title">FACTORY CONSTRUCTION AND MODELING</h3>
            <p className="serv__card__text">BIM technology connects people and technical solutions to optimize time and money, and improve the comfort and efficiency of buildings, whether they are skyscrapers, hospitals, offices or residential complexes.</p>
          </div>
        </div>

          {cards}

        </div>
      </section>
  )
}

export default Services

