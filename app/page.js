"use client"
import Link from "next/link";
import './css/meucss.css';
import css from "styled-jsx/css";
export default function Home() {
  return (
    <body>
      <header>
          <h1 className="logo"> O Boticario</h1>
          <nav>
            <a className="NavBar" href="#">home</a>
            <a className="NavBar" href="#">Produtos</a>
            <a className="NavBar" href="#">Contatos</a>

              {/* <Link href="/login">Login</Link> */}
              <Link className="NavBarcadastra-se" href="/cadastro">Cadastra-se</Link>
         
          </nav>
      </header>
      <main>
        <div className="conteiner">
            <div className="quadroimage">
              <img className="local" src="https://www.reciclasampa.com.br/imgs/conteudos/boticario_loja_sustentavel_divulgacao_796.jpg" alt="" width="500"/>
            </div>
            <div className="quadrodetexto">
              <h2>Boticario</h2>
              <p className="textodescricao">O Boticário foi fundado em 1977, na cidade de Curitiba, Paraná. A empresa começou como uma pequena perfumaria e, ao longo dos anos, expandiu-se para se tornar uma das maiores redes de franquias de cosméticos do Brasil e do mundo. Conhecida por sua ampla gama de produtos de beleza, a marca também se destaca por seu compromisso com a sustentabilidade e a responsabilidade social. O Boticário é reconhecido pela qualidade de seus produtos e pela inovação constante em suas linhas.</p>
            </div>
        </div>
      </main>
      <footer>
        <div>
          <h2>O Boticario</h2>
          <p>Loja de Cosmesticos com varias</p>
          <p>variedades para você escolher</p>

        </div>
        <div>
          <h3>Contato:</h3>
          <ul>
            <li>Whatsapp: (11)994117835</li>
            <li>Instagran: @Boticario</li>
            <li>Email: boticariobrasil@hotmail.com</li>

          </ul>
        </div>
        <div>
          <h3>Localização:</h3>
          <p>Av. Sargento Geraldo Sant'Ana, 1491 </p>
          <img src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2d3f30b2-74a7-4aec-8ef7-67de4fff5318/2022/08/22/e5750483-e646-4b3b-9c11-f1b62b8466ae/2636f0c5-1324-4177-b212-e9f7fc5850ee.png" alt="localização-boticario" width="200"/>
        </div>
      </footer>
    </body>
  );
}
