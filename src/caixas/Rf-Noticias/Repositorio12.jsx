import './Repositorio12.css'
import CodigoHtml12 from './Codigos/Codigo12';
import LinkSite12 from './Link-site/Link12';

function Repositorio12(){
    return(
     <div className='repositorioLink12'> 
     <button onClick={Abrir12}>REPOSITORIO</button>
          <div id='codigo12' className="codigo12">
              <button onClick={Fechar12}>X</button>

                  <CodigoHtml12 />
                  <br />
                  <LinkSite12 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio12;

  function Abrir12(){
    var codigo = document.getElementById('codigo12')

      codigo.style.display='block'

  }
  function Fechar12(){
    var codigo = document.getElementById('codigo12')

    codigo.style.display='none'

  }