import React from 'react'
import ShowCaseTopBar from './ShowCaseTopBar'
import {ReactComponent as Illustration} from '../../Assets/ShowCase/showcase_illustration.svg'

import hFLogo from '../../Assets/ShowCase/hellfest_logo.svg'
import llpzLogo from '../../Assets/ShowCase/lolapalooza_logo.svg'
import mJFLogo from '../../Assets/ShowCase/MJF_logo.svg'
import reSLogo from '../../Assets/ShowCase/ReS_logo.svg'
import tLLogo from '../../Assets/ShowCase/tomorrowland_logo.svg'
import vcLogo from '../../Assets/ShowCase/vc_logo.svg'
import sDLogo from '../../Assets/ShowCase/solidays_logo.svg'

import './showcase.scss'

function ShowCase() {

  const partnerImages = [

  ]

  return (
    <div className='Showcase'>
      <ShowCaseTopBar />
      <div className='Showcase__container'>
        <section className='Showcase__container_section1'>
          <div className='Showcase__container_section1_top'>
            <div className='Showcase__container_section1_top_left'>
              <h1>Souhaitez-vous avoir la meilleure qualité sonore pour vos stories ?</h1>
              <p>Reliveo vous permet de directement récupérer l’audio d’un concert 
                ou d’un festival pour l’ajouter à votre vidéo. 
                Partagez vos plus beaux moments ou diffusez votre 
                évènement pour que tous puissent en profiter
              </p>  
            </div>
            <div className='Showcase__container_section1_top_right'>
              <Illustration />
            </div>
          </div>
          
          <div className='Showcase__container_partners'>
            <h5>Nos Partenaires</h5>
            <br></br>
            <div className='Showcase__container_partners_list'>
              <img src={hFLogo}/>
              <h2>|</h2>
              <img src={llpzLogo}/>
              <h2>|</h2>
              <img src={mJFLogo}/>
              <h2>|</h2>
              <img src={reSLogo}/>
              <h2>|</h2>
              <img src={tLLogo}/>
              <h2>|</h2>
              <img src={vcLogo}/>
              <h2>|</h2>
              <img src={sDLogo}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ShowCase