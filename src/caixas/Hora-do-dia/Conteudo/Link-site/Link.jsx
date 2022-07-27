import './Link.css'

function LinkSite(){
    return(
     <div className='repositorio'> 
    <button id='entrar' onClick={abrirLike}>MAIS</button>
    <button id='sair' onClick={fecharLike}>X</button>

    <div className='inf' id='minha-inf'>
    <h2>SOU UM DESENVOLVEDOR WEB <span>FULL STACK</span></h2>
        <br />
       <h4 id='detalhe'>DETALHES</h4>
       <br />
       <h5> <b>NOME</b> : GUIL VITOR</h5>
       <br />
       <h5> <b>IDADE</b> : 20</h5>
       <br />
       <h5> <b>CONTATO</b> : 75999033442</h5>
       <br />
       <h5> <b>EMAIL</b> : guilvitor05@gmail.com</h5>


        <a href="https://www.linkedin.com/in/guil-vitor-27409323b/">  <div className='logo-likedin'></div></a>
       
    </div>


          <div id='codigohtml' className="codigo">

              <div className="Conteudo">


              </div>

            
          </div>
     </div>
    );
  } 
  
  export default LinkSite;

  function abrirLike(){
 
    var inf = document.getElementById('minha-inf')
    var sair = document.getElementById('sair')

    inf.style.display='block'
    sair.style.display='block'
    
    
  }

  function fecharLike(){
 
    var inf = document.getElementById('minha-inf')
    var sair = document.getElementById('sair')


    inf.style.display='none'
    sair.style.display='none'
    
    
  }