import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/home";
import { Comojogar } from "../components/comoJogar/ComoJogar"
export const AppRoutes = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/comoJogar" element={<Comojogar /> }/>
            </Routes>
        </BrowserRouter>

    );
}