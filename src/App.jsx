import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import f_Nico from './assets/Nicolás.jpg'
import f_Pablo from './assets/Pablo.jpg'
import f_Gus from './assets/Gustavo.png'
import gmail from './assets/gmail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {

  const [count, setCount] = useState(0)
  const Usuarios = [{'Nombre':"Nicolás","Apellido" : "Soto","Link":"https://www.linkedin.com/in/nicolas-soto-leon/","foto":f_Nico,"Correo":"nicolassoto@alumnos.uai.cl"},
                    {'Nombre':"Pablo","Apellido" : "Zuñiga","Link":"https://www.linkedin.com/in/pablo-z%C3%BA%C3%B1iga/","foto":f_Pablo,"Correo":"pabzuniga@alumnos.uai.cl"},
                    {'Nombre':"Gustavo","Apellido" : "Seitz","Link":"https://www.linkedin.com/in/gustavo-seitz-sacco-400993272/","foto":f_Gus,"Correo":"gseitz@alumnos.uai.cl"}]
  
  return (
    <>

    <div>
      <h1>¡Contáctennos!</h1>
    </div>
    <div className='Contenedor'>
      {Usuarios.map((usuario) => (
        <div className='Usuario' key = {usuario.Nombre}>
          <img src={usuario.foto} alt="Foto" style={{width:"50%",borderRadius:"40px"}}/>
          <h2 style={{color: "#1a1a1a"}}>{usuario.Nombre} {usuario.Apellido}</h2>
          <div className='Linkedin' style={{display:"flex",justifyContent:"center",verticalAlign:"bottom"}}>
              <FontAwesomeIcon icon={faLinkedinIn}  border bounce  style={{color: "white", background:"#304880",borderRadius:"5px",width:"5%", height : "5%"}} />
            <a href={usuario.Link} target="_blank">
              Linkedin
            </a>
          </div>
          <div className='Correo' style={{display:"flex", justifyContent:"center"}}> 
            <img src={gmail} alt="Gmail" style={{width:"7%", height : "7%",placeSelf:"center",marginRight:"5px"}}/>
            <a href={"mailto:"+usuario.Correo} target="_blank">{usuario.Correo}</a>
          </div>
        </div>
      ))}
    </div>

    </>
  )
}

export default App
