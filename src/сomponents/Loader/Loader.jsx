import React, { useEffect, useState } from "react";
import {
    LoaderDesc,
    LoaderPercentage,
    Preloader,
    PreloaderInner,
} from "./Loader.styled";

export const Loader = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 5);

        return () => clearInterval(interval);
    }, []);

    return (
        <Preloader>
            <PreloaderInner>
                <LoaderDesc></LoaderDesc>
                <LoaderPercentage>{percentage}%</LoaderPercentage>
            </PreloaderInner>
        </Preloader>
    );
};
