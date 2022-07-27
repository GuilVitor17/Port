 import './navbar.css'
 import {Routes, Route, Link} from 'react-router-dom'
 import Horario from '../caixas/Hora-do-dia/Conteudo/conteudo1'
 import Contador from '../caixas/Contador/Contador'
 import Menulateral from './Menu-lateral/menu'
 import Relogio from '../caixas/Relogio/Relogio'
 import Tabuada from '../caixas/Tabuada/Tabuada'
 import Tarefa from '../caixas/Tarefa/Tarefa'
 import Calculadora from '../caixas/Calculadora/Calculadora'
 import CloneTera from '../caixas/Clone-Tera/CloneTera'
 import CloneTesla from '../caixas/Clone-Tesla/CloneTesla'
 import Sistmfinanceiro from '../caixas/Sistema-financeiro/Sistema-financeiro'
 import RFnoticias from '../caixas/Rf-Noticias/rf-Noticias'
 import CobraGame from '../caixas/Jogo-da-cobra/jogo-cobra'
 import Verificador from '../caixas/Verificador/Verificador'
 import Ebook from '../caixas/ebook/ebook'
 import PipApi from '../caixas/PipApi/PipApi'

 function navbar(){

    return( 

  <div>
       <div id="section" className="section1"> 
         
         <div className="menu" id="menu">
           <div className='fixo'>

         <header>

  <nav>
  <button className='menu-mobile' onClick={menu}>=</button>

  <ul id='ul' className='ul'>
  <button className='sair' onClick={sair}>X</button>
    <div className='menu-rolagem'>
    <Link to='/'><li>PORTFOLIO</li></Link>
    <Link to='/Contador'> <li>CONTADOR</li></Link> 
    <Link to='/Relogio'><li>RELOGIO</li></Link>
    <Link to='/Tabuada'> <li> TABUADA</li> </Link>
    <Link to='/Tarefa'> <li>TAREFA</li></Link>

    <Link className='Mobile' to='/Calculadora' > <li>CALCULADORA</li></Link> 
    <Link className='Mobile' to='/Clone-Tera' > <li>CLONE DA TERA</li></Link> 
    <Link className='Mobile' to='/Clone-Tesla' > <li>CLONE DA TESLA</li></Link> 
    <Link className='Mobile' to='/Verificador' > <li>VERIFICADOR</li></Link> 
    <Link className='Mobile' to='/Sistema-Financeiro' > <li>SISTEMA FINANCEIRO</li></Link> 
    <Link className='Mobile' to='/Cobra-Game' > <li>HORA DO DIA</li></Link> 
    <Link className='Mobile' to='/Rf-Noticias' > <li>RF NOTICIAS</li></Link> 
    <Link className='Mobile' to='/ebook' > <li>E-BOOK</li></Link> 
    <Link className='Mobile' to='/pipApi' > <li>API-PYTHON</li></Link> 


    <li className='abrirmenu' onClick={abrirMenu}>MENU</li>
    </div>
    </ul>
    <div className='Novo-menu' id='Novo-menu'>
         <div className='menu-novo'>
         <button onClick={sairMenu}>X</button>
         <Menulateral />


         </div>
      
      </div>
  
    </nav> 

   
    </header>
    </div>

       </div>

     </div>

     <div className='conteudo'>

<Routes>

  <Route path='/' element={<Horario />} />
  <Route path='/Contador' element={<Contador />} />
  <Route path='/Relogio' element={<Relogio />} />
  <Route path='/Tabuada' element={<Tabuada />} />
  <Route path='/Tarefa' element={<Tarefa />} />
  <Route path='/Calculadora' element={<Calculadora />} />
  <Route path='/Clone-Tera' element={<CloneTera />} />
  <Route path='/Clone-Tesla' element={<CloneTesla />} />
  <Route path='/Verificador' element={<Verificador />} />
  <Route path='/Sistema-Financeiro' element={<Sistmfinanceiro />} />
  <Route path='/Cobra-Game' element={<CobraGame />} />
  <Route path='/Rf-Noticias' element={<RFnoticias />} />
  <Route path='/ebook' element={<Ebook />} />
  <Route path='/pipApi' element={<PipApi />} />

</Routes>

 </div>





</div>

);
}

export default navbar;

function abrirMenu(){

  var menu = document.getElementById('Novo-menu') 

  menu.style.display='block'

     
   
}
function sairMenu(){

  var sairmenu = document.getElementById('Novo-menu') 

  sairmenu.style.display='none'

     
   
}



function menu(){
    var ul = document.getElementById('ul');

    if(menu){
        ul.style.display='block'
      } 
}

function sair(){
    var ul = document.getElementById('ul');

    if(menu){
        ul.style.display='none'
      } 

}


