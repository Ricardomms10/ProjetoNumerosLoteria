import { Container } from "@mui/material";
import { Buttons } from "../button";
import { Titulo } from "./styled";

export const Main = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Container
                maxWidth="md"
                sx={{
                    flex: 1, // Isso fará com que o Container principal ocupe todo o espaço disponível verticalmente
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "70px",
                }}
            >
                <Titulo>
                    <h1>GERADOR DE NÚMEROS</h1>
                    <h4>
                        Pronto para uma dose extra de sorte? Escolha um jogo abaixo para descobrir o seu número da sorte e cruze os dedos para a próxima jogada na loteria!
                    </h4>
                </Titulo>
                <Buttons />
            </Container>
        </div>
    );
};
