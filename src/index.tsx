import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./routes/home";
import { ThemeProvider,createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#42b861",
      contrastText: "#fff",
    },
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
