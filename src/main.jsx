import React from "react";
import ReactDOM from "react-dom/client";
import App from "./сomponents/App";
import "./index.css";
import { GlobalStyle } from "./сomponents/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { persistor, store } from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        background: "#F9F9F9",
        secondBackground: "#fff",
        lightYellow: "#FFF4DF",
        yellow: "#F6B83D",
        black: "#262626",
        pink: "#F43F5E",
        lightPink: "rgba(244, 63, 94, 0.1)",
        green: "#08AA83",
        blue: "#54ADFF",
        lightBlue: "rgba(84, 173, 255, 0.1)",
        greyText: "rgba(43, 43, 42, 0.4)",
        backgroundBlur: "rgba(0, 0, 0, 0.3)",
    },
    // radii: {
    //     sm: "4px",
    //     md: "10px",
    //     lg: "70px",
    // },
    spacing: (value) => `${value * 4}px`,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/petlove">
            {/* <Provider store={store}> */}
            {/* <PersistGate persistor={persistor}> */}
            <ThemeProvider theme={theme}>
                <App />
                <GlobalStyle />
            </ThemeProvider>
            {/* </PersistGate> */}
            {/* </Provider> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
