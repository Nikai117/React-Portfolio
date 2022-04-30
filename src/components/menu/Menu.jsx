import './Menu.scss'

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#Intro">Home</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#Portofolio">Portofolio</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#Skills">Skills</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
