import styled from 'styled-components';

export const WrapperSld = styled.div`
border-bottom: 1px solid #bbb;
display: flex;
padding: 10px 0px;

`;

export const ConcursoSld = styled.div`
font-size: .9rem;
color: ${props => props.theme.dataProximoConcurso};
display: flex;
align-items: flex-end;
padding-bottom: 3px;
margin-left: 10px;
`;

export const ResultadoSld = styled.div`
font-size:  2.2rem;
color: ${props => props.theme.valorEstimadoProximoConcurso};
display: flex;
align-items: flex-end;
padding-bottom: 3px;
margin-left: 10px;
`;