import React from 'react'
import "./Header.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

export default function Header({menuOpen, setMenuOpen }) {
  return (
    <div className={'Header ' + (menuOpen &&  'active')}>
        <div className='Wrapper'>
            <div className="leftHeader">
                <a href='#Intro' className='Logo'>Making it possible...</a>
                <div className='itemContainer'>
                  <LinkedInIcon className='headerIcon'/>
                  <span>Nikai Delfgou</span>
                </div>
                <div className='itemContainer'>
                  <CodeIcon className='headerIcon'/>
                  <span>Software Developer</span>
                </div>
            </div>
            <div className="rightHeader">
                <div className='Menu' onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className='item1'></span>
                  <span className='item2'></span>
                  <span className='item3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
