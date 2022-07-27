import './menu.css'
import {Link} from 'react-router-dom'

function Menulateral(){
    return(
     <div className='menu-lateral'> 

           <div className='menu-center'>


              <ul id='menulateral'>
            <Link to='/Calculadora' > <li>CALCULADORA</li></Link> 
            <Link to='/Clone-Tera' > <li>CLONE DA TERA</li></Link> 
            <Link to='/Clone-Tesla' > <li>CLONE DA TESLA</li></Link> 
            <Link to='/Verificador' > <li>VERIFICADOR</li></Link> 
            <Link to='/Sistema-Financeiro' > <li>SISTEMA FINANCEIRO</li></Link> 
            <Link to='/Cobra-Game' > <li>HORA DO DIA</li></Link> 
            <Link to='/Rf-Noticias' > <li>RF NOTICIAS</li></Link> 
            <Link to='/ebook' > <li>E-BOOK</li></Link> 
            <Link to='/pipApi' > <li>API PYTHON</li></Link> 
            
           </ul>


          

           </div>

     </div>
    );
  } 
  
  export default Menulateral;

  