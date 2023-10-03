import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { TextGame } from './styled';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicStack() {
    return (
        <Box sx={{ width: '100%', marginTop: '70px', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '50%' }}>
                <Stack spacing={2}>
                    <Item>
                        <TextGame>
                            <h2>MEGA SENA </h2>
                            <p> A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de a​postas. Para realizar o sonho de ser milionário, você deve marcar de 6 a 20 números do volante, pode​ndo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>Os sorteios da Mega-Sena são realizados três vezes por semana, às terças, quintas e aos sábados. </p>
                        </TextGame>
                    </Item>

                    <Item>
                        <TextGame>
                            <h2>QUINA</h2>
                            <p> Concorra a prêmios grandiosos com a Quina: basta marcar de 5 a 15 números dentre os 80 disponíveis no volante e torcer. Caso prefira o sistema pode escolher os números para você através da Surpresinha.
                                Ganham prêmios os acertadores de 2, 3, 4 ou 5 números. Você ainda pode concorrer com a mesma aposta por 3, 6, 12, 18 ou 24 concursos consecutivos com a Teimosinha.
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>São 6 sorteios semanais: de segunda-feira a sábado, às 20h. </p>
                        </TextGame>
                    </Item>

                    <Item>
                        <TextGame>
                            <h2>LOTOFÁCIL</h2>
                            <p> A Lotofácil é, como o próprio nome diz, fácil de apostar e principalmente de ganhar. Você marca entre 15 e 20 números, dentre os 25 disponíveis no volante, e fatura prêmio se acertar 11, 12, 13, 14 ou 15 números. Pode ainda deixar que o sistema escolha os números para você por meio da Surpresinha, ou concorrer com a mesma aposta por 3, 6, 12, 18 ou 24 concursos consecutivos através da Teimosinha.
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>Os sorteios são realizados às segundas, terças, quartas, quintas, sextas-feiras e sábados, sempre às 20h.</p>
                        </TextGame>
                    </Item>

                    <Item>
                        <TextGame>
                            <h2>DUPLA SENA</h2>
                            <p> Com apenas um bilhete da Dupla Sena, você tem o dobro de chances de ganhar: são dois sorteios por concurso e ganha acertando 3, 4, 5 ou 6 números no primeiro e/ou segundo sorteios. Basta escolher de 6 a 15 números dentre os 50 disponíveis e torcer. Você pode deixar, ainda, que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 3, 4, 6, 8, 9 ou 12 concursos consecutivos (Teimosinha).
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>A Dupla Sena é sorteada às segundas, quartas e sexta-feiras, sempre às 20h.</p>
                        </TextGame>
                    </Item>

                    <Item>
                        <TextGame>
                            <h2>+MILIONÁRIA</h2>
                            <p>A +Milionária é uma loteria diferente e que oferece ao apostador mais chances de ganhar e prêmio mínimo de R$ 10 milhões.
                                A +Milionária possui um volante com duas matrizes, denominadas: Matriz de Números e Matriz de Trevos Numerados. A Matriz de Números possui cinquenta números no universo de 1 a 50; a Matriz de Trevos Numerados possui seis trevos numerados no universo de 1 a 6.
                                Para registrar uma aposta simples, você escolhe 6 números na Matriz de Números e marca dois trevos no espaço logo abaixo, na Matriz de Trevos Numerados.
                                Se quiser contar com a sorte, pode deixar que o sistema escolha os números para você, com a aposta Surpresinha. Outra opção é repetir seu jogo da sorte por até 5 concursos consecutivos, com a Teimosinha.
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>Os sorteios ocorrem semanalmente, às quartas e aos sábados a partir das 20h, com transmissão ao vivo no perfil da CAIXA no YouTube.</p>
                        </TextGame>
                    </Item>

                    <Item>
                        <TextGame>
                            <h2>LOTOMANIA</h2>
                            <p> A Lotomania é fácil de jogar e de ganhar: basta escolher 50 números e então concorrer a prêmios para acertos de 20, 19, 18, 17, 16, 15 ou nenhum número.
                                Além da opção de marcar no volante, você ainda pode marcar menos que 50 números e deixar que o sistema complete o jogo para você; não marcar nada e deixar que o sistema escolha todos os números na Surpresinha e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos com a Teimosinha. Outra opção é efetuar uma nova aposta com o sistema selecionando os outros 50 números não registrados no jogo original, através da Aposta-Espelho.
                            </p>
                            <h4>SORTEIOS:</h4>
                            <p>Os sorteios são realizados às segundas-feiras, às quartas-feiras e às sextas-feiras, às 20h. </p>
                        </TextGame>
                    </Item>
                </Stack>
            </Box>
        </Box>
    );
}