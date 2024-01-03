import React, { useRef } from 'react';

import Logo from '../imgs/Logo Grande.png'
import DartIcon from '../icons/icons8-dardo.svg';
import  Luca_pimenta_dg from '..//imgs/Mockup LucaPimenta.png'
import  Colegio_kairos from '..//imgs/Mockup ColegioKairos.png'

import '../style/home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faCss3Alt, faHtml5, faPython, faJs, faGitAlt, faReact, faElementor } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faLaptopCode, faEye } from '@fortawesome/free-solid-svg-icons';


function Home(){
    
    const nomeRef = useRef(null);
    const emailRef = useRef(null);
    const botaoRef = useRef(null);
    const telRef = useRef(null);
    const assuntoRef = useRef(null);
    const mensagemRef = useRef(null);

    const nome_regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const email_regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


    const validacao_nome = () => {
        const input = nomeRef.current;
        const erroId = 'erro_nome';
        const erroExistente = document.getElementById(erroId);
        if (nome_regex.test(input.value)) {
            if (erroExistente) {
                erroExistente.remove();
            }
        } else {
            if (!erroExistente) {
                const paragrafo = document.createElement("p");
                paragrafo.id = erroId;
                const erro_texto = document.createTextNode('ERRO! Digite o nome, sem números!');
                paragrafo.appendChild(erro_texto);
                input.parentNode.insertBefore(paragrafo, input.nextSibling);
            }
        }
    }    

    const validacao_email = () => {
        const input = emailRef.current;
        const erroId = 'erro_email';
        const erroExistente = document.getElementById(erroId);
        if (email_regex.test(input.value)) {
            if (erroExistente) {
                erroExistente.remove();
            }
        } else {
            if (!erroExistente) {
                const paragrafo = document.createElement("p");
                paragrafo.id = erroId;
                const erro_texto = document.createTextNode('ERRO! Digite um email existente!');
                paragrafo.appendChild(erro_texto);
                input.parentNode.insertBefore(paragrafo, input.nextSibling);
            }
        }
    }


    return (
        <div>
            <header id='home_header'>
                <div id='logo_img'>
                    <img src={Logo} alt='Logo Luan Pimenta DEV' className='logo-img'></img>
                </div>
                <ul className='menu'>
                    <li><a href='#sobremim'>SOBRE MIM</a></li>
                    <li><a href='#projetos'>PROJETOS</a></li>
                    <li><a href='#orcamento'>ORÇAMENTO</a></li>
                    <li><a href='#contato'>CONTATO</a></li>
                    <li><a href='#redes'>REDES</a></li>
                </ul>
            </header>
            <section id='sobremim' className='sobremim'>
                <h1>Sobre mim</h1>
                <div className='cards_flex'>
                    <h3>Linguagens de Programação</h3>
                <div className='cards_linguagens' id='card'>
                    <div id='html_card' className='cards'>
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML5</p>
                        {/* <FontAwesomeIcon icon={faEye} id='plus'/> */}
                    </div>
                    <div id='css_card' className='cards'>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS3</p>
                    </div>
                    <div id='js_card' className='cards'>
                        <FontAwesomeIcon icon={faJs} />
                        <p>JavaScript</p>
                    </div>
                    <div id='python_card' className='cards'>
                        <FontAwesomeIcon icon={faPython} />
                        <p>Python</p>
                    </div>
                </div>

                <h3>Bibliotecas e Frameworks</h3>
                <div className='cards_bibli_frame' id='card'>
                    <div id='react_card' className='cards'>
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </div>
                </div>

                <h3>Estudando</h3>
                <div className='cards_estudando' id='card'>
                    <div id='dart_card' className='cards'>
                        <img src={DartIcon} alt="Ícone Dart" />
                        <p>Dart</p>
                    </div>
                </div>

                <h3>CMS e Construtores de Página</h3>
                <div className='cards_cms' id='card'>
                    <div id='wordpress_card' className='cards'>
                        <FontAwesomeIcon icon={faWordpress} />
                        <p>WordPress</p>
                    </div>
                    <div id='elementor_card' className='cards'>
                        <FontAwesomeIcon icon={faElementor} />
                        <p>Elementor</p>
                    </div>
                </div>

                <h3>Ferramentas de Controle de Versão</h3>
                <div className='cards_ferramentas' id='card'>
                    <div id='git_card' className='cards'>
                        <FontAwesomeIcon icon={faGitAlt} />
                        <p>GIT</p>
                    </div>
                </div>

                <h3>Outras Habilidades</h3>
                <div className='cards_habilidades' id='card'>
                    <div id='testes_card' className='cards'>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <p>Testes Unitários</p>
                    </div>
                </div>
                </div>
            </section>
            <section id='projetos' className='projetos'>
                <h1>Projetos</h1>
                <div className='projetos_flex'>
                    <div className='cards_projetos'>
                        <img src={Luca_pimenta_dg} alt="Imagem Luca Pimenta DG" />
                        <h2>Site - Luca Pimenta DG</h2>
                        <p>Todo bom profissional precisa de um site com seu portfólio, não é? Afinal, se não fosse importante você não estaria aqui. Esse site foi criado para o designer gráfico, Luca Pimenta com o intuito de demonstrar o seu trabalho para potenciais clientes.</p>
                        <div className='linguagem_projetos'>
                            <a href='#wordpress_card'><FontAwesomeIcon icon={faWordpress} id='wordpress'/></a>
                            <a href='#elementor_card'><FontAwesomeIcon icon={faElementor} id='elementor'/></a>
                            <a href='#css_card'><FontAwesomeIcon icon={faCss3Alt} id='css'/></a>
                        </div>
                        <div className='preview_projetos'>
                        <a href='https://lucapimentadg.com/' target='blank'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </div>

                    <div className='cards_projetos'>
                        <img src={Colegio_kairos} alt="Imagem Colégio Kairós" />
                        <h2>Site - Colégio Kairós</h2>
                        <p>Desenvolvi um site para o Colégio Kairós, uma instituição de ensino em João Pessoa, Brasil. O site fornece informações sobre a escola, galeria de imagens, notícias atualizadas e detalhes de contato. A criação do site foi feita para refletir os valores do Colégio Kairós e seu compromisso com a educação.</p>
                        <div className='linguagem_projetos'>
                            <a href='#wordpress_card'><FontAwesomeIcon icon={faWordpress} id='wordpress'/></a>
                            <a href='#elementor_card'><FontAwesomeIcon icon={faElementor} id='elementor'/></a>
                            <a href='#css_card'><FontAwesomeIcon icon={faCss3Alt} id='css'/></a>
                        </div>
                        <div className='preview_projetos'>
                            <a href='https://colegiokairosjp.com/' target='blank'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='orcamento' id='orcamento'>
                <h1>Orçamento</h1>
                <div id='orcamento_flex'>
                    <div className='cards_orcamento'>
                        <h3>Landing Page</h3>
                        <h2><span id='moeda'>R$ </span>700 <br />
                            <span id='manutençao'>+ R$100 de manutenção mensal</span></h2>
                        <ul>
                            <li>Página de destino personalizada para atrair clientes</li>
                            <li>Informações claras sobre produtos/serviços</li>
                            <li>Formulário de contato de captura de leads</li>
                            <li>Suporte técnico contínuo</li>
                        </ul>
                    </div>

                    <div className='cards_orcamento'>
                        <h3>Site de Portfólio Pessoal</h3>
                        <h2><span id='moeda'>R$ </span>1.300 <br />
                            <span id='manutençao'>+ R$150 de manutenção mensal</span></h2>
                        <ul>
                            <li>Apresentação profissional de seu trabalho</li>
                            <li>Até 5 páginas de portfólio personalizadas</li>
                            <li>Atualizações regulares de conteúdo</li>
                            <li>Suporte técnico contínuo</li>
                        </ul>
                    </div>

                    <div className='cards_orcamento'>
                        <h3>Site de Negócios Básico</h3>
                        <h2><span id='moeda'>R$ </span>3.000 <br />
                            <span id='manutençao'>+ R$200 de manutenção mensal</span></h2>
                        <ul>
                            <li>Presença online completa, até 10 páginas</li>
                            <li>Informações sobre sua empresa, serviços e equipe</li>
                            <li>Integração de mídias sociais e informações de contato</li>
                            <li>Suporte técnico e atualizações regulares</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='contato'>
                <h1>Contato</h1>
                <form>
                    <div id='contato_linha1'>
                        <label>Nome</label><br />
                        <input type='text' ref={nomeRef} onBlur={validacao_nome} ></input>
                    </div>
                    <div id='contato_linha2'>
                        <label>Email</label><br />
                        <input type='email' ref={emailRef} onBlur={validacao_email}></input>
                    </div>
                    <div id='contato_linha3'>
                        <label>Telefone</label><br />
                        <input type='tel' ref={telRef}></input>
                    </div>
                    <div id='contato_linha4'>
                        <label>Assunto</label><br />
                        <input type='text' ref={assuntoRef}></input>
                    </div>
                    <div id='contato_linha5'>
                        <label>Mensagem</label><br />
                        <textarea type='text' ref={mensagemRef} ></textarea>
                    </div>
                    <div id='contato_linha6'>
                        <input type='button' value='Enviar' id='enviar' ref={botaoRef}></input>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Home;
