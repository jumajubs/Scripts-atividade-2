import { HTMLAttributes } from "react";
import { WrapperSld, ResultadoSld, ConcursoSld } from "./styles";

type Props = HTMLAttributes <HTMLElement>&{
    numero: number,
    dataApuracao: string;
}

export function Header({numero, dataApuracao}:Props){
    console.log(numero, dataApuracao);
    return (
        <WrapperSld>
            <ResultadoSld>Resultado</ResultadoSld> 
            <ConcursoSld>Concurso {numero} ({dataApuracao})</ConcursoSld>
        </WrapperSld>
    )
}