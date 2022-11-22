import styled from "styled-components";

export const TestSld = styled.div`
background: ${props => props.theme.background};
acumulado: ${props => props.theme.acumulado};
sorteio: ${props => props.theme.sorteio};
dezena: ${props => props.theme.dezena};
resultado: ${props => props.theme.resultado};
concurso: ${props => props.theme.concurso};
local: ${props => props.theme.local};
dataProximoConcurso: ${props => props.theme.dataProximoConcurso};
valorEstimadoProximoConcurso: ${props => props.theme.valorEstimadoProximoConcurso};




font-size: 1.5rem;
margin-left: 15px;
padding-bottom: 4px;
align-self : flex-end;
white-space: nowrap;
`;