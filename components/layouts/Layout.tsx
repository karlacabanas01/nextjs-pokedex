import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}
const origin = (typeof window === 'undefined') ? '': window.location.origin; //esto me da -> http://localhost:3000
//Funcitional Components
export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="KarlaCabCas" />
        <meta name="descripcion" content={`Informacion del pokemon ${title}`} />
        <meta name="keywords" content="pokemon, pokedex" />
        
        <meta property="og:title" content={`Infromacion sobre: ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin} /img/banner.png`} />

      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  );
};
