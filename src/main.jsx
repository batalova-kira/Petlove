import "modern-normalize/modern-normalize.css"; // Імпорт modern-normalize
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./сomponents/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = {
    colors: {
        background: "#F9F9F9",
        secondBackground: "#fff",
        accentWhite: "rgba(255, 255, 255, 0.4);",
        lightYellow: "#FFF4DF",
        yellow: "#F6B83D",
        secondaryYellow: "#FFC531",
        hoverYellow: "#fbe7c1",
        secondaryHoverYellow: "#f9b020",
        black: "#262626",
        secondaryBlack: "#2b2b2a",
        mediumGrey: "rgba(38, 38, 38, 0.8)",
        lightGrey: "rgba(38, 38, 38, 0.5)",
        veryLightGrey: "rgba(38, 38, 38, 0.2)",
        pink: "#F43F5E",
        red: "#ef2447",
        borderWhite: "rgba(255, 255, 255, 0.5)",
        borderGrey: "rgba(38, 38, 38, 0.15)",
        borderWhiteActive: "rgba(255, 255, 255, 0.15)",
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
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <App />
                        {/* <GlobalStyle
                            isHomePage={window.location.pathname === "/"}
                        /> */}
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
