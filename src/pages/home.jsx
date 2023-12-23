import React from 'react';

import Logo from '../imgs/Logo Grande.png'
import DartIcon from '../icons/icons8-dardo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faCss3Alt, faHtml5, faPython, faJs, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


function Home(){
    return (
        <div>
            <header>
                <img src={Logo} alt='Logo Luan Pimenta DEV' className='logo-img'></img>
                <ul className='menu'>
                    <li><a href='#sobremim'>SOBRE MIM</a></li>
                    <li><a href='#projetos'>PROJETOS</a></li>
                    <li><a href='#orcamento'>ORÇAMENTO</a></li>
                    <li><a href='#contato'>CONTATO</a></li>
                    <li><a href='#redes'>REDES</a></li>
                </ul>
            </header>
            <section className='sobremim'>
                <h1>Sobre mim</h1>
                <div className='cards_linguagens'>
                    <h3>Linguagens de Programação</h3>
                    <div id='html_card'>
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML5</p>
                    </div>
                    <div id='css_card'>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS3</p>
                    </div>
                    <div id='js_card'>
                        <FontAwesomeIcon icon={faJs} />
                        <p>JavaScript</p>
                    </div>
                    <div id='python_card'>
                        <FontAwesomeIcon icon={faPython} />
                        <p>Python</p>
                    </div>
                </div>

                <div className='cards_estudando'>
                    <h3>Estudando</h3>
                    <div id='dart_card'>
                        <img src={DartIcon} alt="Ícone Dart" />
                        <p>Dart</p>
                    </div>
                </div>

                <div className='cards_ferramentas'>
                    <h3>Ferramentas de Controle de Versão</h3>
                    <div id='git_card'>
                        <FontAwesomeIcon icon={faGitAlt} />
                        <p>GIT</p>
                    </div>
                </div>

                <div className='cards_bibli_frame'>
                    <h3>Bibliotecas e Frameworks</h3>
                    <div id='react_card'>
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </div>
                </div>

                <div className='cards_habilidades'>
                    <h3>Outras Habilidades</h3>
                    <div id='testes_card'>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <p>Testes Unitários</p>
                    </div>
                </div>
            </section>
            <section className='projetos'>
                <h1>Projetos</h1>
                <div className='cards_projetos'>
                    <h2>Site - Luca Pimenta DG</h2>
                    <p>Todo bom profissional precisa de um site com seu portfólio, não é? Afinal, se não fosse importante você não estaria aqui. Esse site foi criado para o designer gráfico, Luca Pimenta com o intuito de demonstrar o seu trabalho para potenciais clientes.</p>
                    <div className='linguagem_projetos'>
                        <FontAwesomeIcon icon={faWordpress} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <div className='preview_projetos'>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>

                <div className='cards_projetos'>
                    <h2>Site - Colégio Kairós</h2>
                    <p>Desenvolvi um site para o Colégio Kairós, uma instituição de ensino em João Pessoa, Brasil. O site fornece informações sobre a escola, galeria de imagens, notícias atualizadas e detalhes de contato. A criação do site foi feita para refletir os valores do Colégio Kairós e seu compromisso com a educação.</p>
                    <div className='linguagem_projetos'>
                        <FontAwesomeIcon icon={faWordpress} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <div className='preview_projetos'>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
