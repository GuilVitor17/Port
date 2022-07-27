import './Repositorio5.css'
import CodigoHtml5 from './Codigos/Codigo5';
import LinkSite5 from './Link-site/Link5';

function Repositorio5(){
    return(
     <div className='repositorioLink5'> 
     <button onClick={Abrir5}>REPOSITORIO</button>
          <div id='codigo5' className="codigo5">
              <button onClick={Fechar5}>X</button>

                  <CodigoHtml5 />
                  <br />
                  <LinkSite5 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio5;

  function Abrir5(){
    var codigo = document.getElementById('codigo5')

      codigo.style.display='block'

  }
  function Fechar5(){
    var codigo = document.getElementById('codigo5')

    codigo.style.display='none'

  }