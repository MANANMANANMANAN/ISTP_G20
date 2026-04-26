import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Monasteries from "../pages/Monasteries";
import Temples from "../pages/Temples";
import Translation from "../pages/Translation";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/monasteries" element={<Monasteries />} />
            <Route path="/temples" element={<Temples />} />
            <Route path="/translation" element={<Translation />} />
        </Routes>
    );
}