import { useEffect, useState } from "react";
import { Props } from "../types";
import service from "../services"; 
import { Header } from "../components/Header/header";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Concurso } from "../Concurso";
import { Valor } from "../components/Dezenas";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/theme";
import { TestSld } from "./styles";


export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);
  const [tema, setTema] = useState(dark);

  useEffect( 
    function () { 
      (async function () {
        const numero = Math.floor(Math.random() * 2533);
        const concurso: Props = await service.get(numero);
        console.log(concurso);
        setConcurso(concurso);
        setTema(parseInt(concurso.listaDezenas[0]) % 2 === 0 ? light : dark)

      })() 
    },
    [] 

  )
  return (


    <>
      <ThemeProvider theme={tema}>

        <TestSld>
          <Header numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
          {concurso.acumulado && <Acumulado />}
          <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
          <Valor listaDezenas={concurso.listaDezenas} />
          <Concurso dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso} />
        </TestSld>

      </ThemeProvider>
    </>


  );
}