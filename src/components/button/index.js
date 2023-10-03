import { Button, CircularProgress, Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxNumber, Container } from "./styled";

export const Buttons = () => {
    const [buttonClicked, setButtonClicked] = useState(null);
    const [generatedNumbers, setGeneratedNumbers] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

    const gameMappings = {
        "Mega-Sena": { min: 1, max: 60, quantity: 6, color: "success" },
        "Quina": { min: 1, max: 80, quantity: 5, color: "secondary" },
        "Lotofácil": { min: 1, max: 25, quantity: 15, color: "warning" },
        "Dupla-Sena": { min: 1, max: 50, quantity: 6, color: "warning" },
        "+Milionária": { min: 1, max: 50, quantity: 6, color: "secondary" },
        "Lotomania": { min: 1, max: 100, quantity: 50, color: "success" },
    };

    const handleButtonClick = (gameName) => {
        setButtonClicked(gameName);
        setLoading(true); // Ativar o carregamento ao clicar no botão
        generateNumbers(gameName);
    };

    const generateNumbers = (game) => {
        const { min, max, quantity } = gameMappings[game];
        const generated = [];
        while (generated.length < quantity) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!generated.includes(randomNumber)) {
                generated.push(randomNumber);
            }
        }
        setTimeout(() => {
            // Adicione um "0" na frente dos números menores que 10
            const formattedNumbers = generated.map((number) =>
                number < 10 ? `0${number}` : `${number}`
            );
            setGeneratedNumbers(formattedNumbers);
            setLoading(false); // Desativar o carregamento após a geração dos números
        }, 2000); // Use um tempo adequado para simular a geração
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {Object.keys(gameMappings).map((gameName) => (
                    <Grid item xs={11} sm={6} md={5} lg={3} key={gameName}>
                        <Button
                            variant="contained"
                            color={gameMappings[gameName].color}
                            onClick={() => handleButtonClick(gameName)}
                            style={{ width: "100%", fontSize: "16px" }}
                        >
                            {gameName}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            {loading && (
                <BoxNumber>
                    <CircularProgress disableShrink /> {/* Exibir o CircularProgress durante o carregamento */}
                </BoxNumber>
            )}
            {buttonClicked && !loading && (
                <BoxNumber>
                    <p>
                        Números para <strong>{buttonClicked}</strong>:
                    </p>
                    {generatedNumbers.length > 0 && (
                        <ul>
                            {generatedNumbers.map((number) => (
                                <li key={number}>{number}</li>
                            ))}
                        </ul>
                    )}
                </BoxNumber>
            )}
        </Container>
    );
};




