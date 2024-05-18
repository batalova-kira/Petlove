import React, { useEffect, useState } from "react";
import {
    LoaderPercentage,
    Preloader,
    PreloaderInner,
    SpinningContainer,
} from "./Loader.styled";
import { SpinningSVG } from "./SpinningSVG";

export const Loader = () => {
    const [percentage, setPercentage] = useState(0);
    const [loaded, setLoaded] = useState(false); // Стан для визначення завершення завантаження

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoaded(true); // Позначення завершення завантаження
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <Preloader>
            <PreloaderInner>
                {/* Умовний вираз для відображення спінера і цифр */}
                {!loaded && (
                    <>
                        <SpinningContainer>
                            <SpinningSVG />
                        </SpinningContainer>
                        <LoaderPercentage>{percentage}%</LoaderPercentage>
                    </>
                )}

                {/* Умовний вираз для відображення логотипу */}
                {loaded && <p>Loading finish!</p>}
            </PreloaderInner>
        </Preloader>
    );
};
