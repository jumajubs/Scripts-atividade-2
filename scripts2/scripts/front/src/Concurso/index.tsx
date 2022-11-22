import { HTMLAttributes } from "react";

import { ResultadoSld, ConcursoSld, WrapperSld } from "./styles";

type Props = HTMLAttributes <HTMLElement>&{
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}

export function Concurso({dataProximoConcurso, valorEstimadoProximoConcurso}:Props){
    console.log(dataProximoConcurso, valorEstimadoProximoConcurso);
    return (
            <WrapperSld>
            <ConcursoSld>Estimativa de prêmio do próximo concurso {dataProximoConcurso}</ConcursoSld> 
            <ResultadoSld>R${valorEstimadoProximoConcurso}</ResultadoSld>
            </WrapperSld>
        
    )
}