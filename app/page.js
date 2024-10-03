"use client"
import Link from "next/link";
import {Body, Headerflex, Logo ,Navbar,Linkslogin, Linkscampoacesso} from "./componentes/componentes";
export default function Home() {
  return (
    <Body>
      <Headerflex>
          <Logo>Logo</Logo>
          <nav>
            <Navbar href="#">home</Navbar>
            <Navbar href="#">Produtos</Navbar>
            <Navbar href="#">Contatos</Navbar>
          <Linkscampoacesso>
            <Linkslogin>
              {/* <Link href="/cadastro">Login</Link> */}
            </Linkslogin>
              <Link href="/cadastro">Cadastra-se</Link>
          </Linkscampoacesso>

          </nav>
      </Headerflex>
    </Body>
  );
}
