import { Helmet, HelmetProvider } from "react-helmet-async";

export default function FontsHelmet() {
    return (
        <HelmetProvider>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap"
                />
            </Helmet>
        </HelmetProvider>
    );
}
