import './Repositorio.css'
import CodigoHtml from './Codigos/Codigo';
import LinkSite from './Link-site/Link';

function Repositorio(){
    return(
     <div className='repositorioLink'> 
     <button onClick={Abrir}>SOBRE MIM</button>
    <a href="https://drive.google.com/file/d/1mSq-7CtUiDs91TI_ttqYwwLn_LJ8asRs/view?usp=sharing"> <button id='btn-curriculo'>DOWNLOAD CV</button></a>
          <div id='codigo' className="codigo">
              <button onClick={Fechar}>X</button>

                   <CodigoHtml />
                  <br/>
                  <LinkSite />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio;

  function Abrir(){
    var codigo = document.getElementById('codigo')

      codigo.style.display='block'

  }
  function Fechar(){
    var codigo = document.getElementById('codigo')

    codigo.style.display='none'

  }