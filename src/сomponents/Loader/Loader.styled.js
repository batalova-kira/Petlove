import styled from "styled-components";

export const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background-size: cover;
    background-color: pink;
`;

// /* Mobile Devices */
// @media (max-width: 767px) {
//     #preloader {
//         background: url('mobile-image.jpg') no-repeat center center;
//     }
//     @supports (background-image: url(image.webp)) {
//         #preloader {
//             background: url('mobile-image.webp') no-repeat center center;
//         }
//     }
//     @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//         #preloader {
//             background: url('mobile-image@2x.jpg') no-repeat center center;
//         }
//         @supports (background-image: url(image.webp)) {
//             #preloader {
//                 background: url('mobile-image@2x.webp') no-repeat center center;
//             }
//         }
//     }
// }

// /* Tablets */
// @media (min-width: 768px) and (max-width: 1023px) {
//     #preloader {
//         background: url('tablet-image.jpg') no-repeat center center;
//     }
//     @supports (background-image: url(image.webp)) {
//         #preloader {
//             background: url('tablet-image.webp') no-repeat center center;
//         }
//     }
//     @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//         #preloader {
//             background: url('tablet-image@2x.jpg') no-repeat center center;
//         }
//         @supports (background-image: url(image.webp)) {
//             #preloader {
//                 background: url('tablet-image@2x.webp') no-repeat center center;
//             }
//         }
//     }
// }

// /* Desktop */
// @media (min-width: 1024px) {
//     #preloader {
//         background: url('desktop-image.jpg') no-repeat center center;
//     }
//     @supports (background-image: url(image.webp)) {
//         #preloader {
//             background: url('desktop-image.webp') no-repeat center center;
//         }
//     }
//     @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//         #preloader {
//             background: url('desktop-image@2x.jpg') no-repeat center center;
//         }
//         @supports (background-image: url(image.webp)) {
//             #preloader {
//                 background: url('desktop-image@2x.webp') no-repeat center center;
//             }
//         }
//     }
// }

export const PreloaderInner = styled.div`
    position: relative;
    text-align: center;
`;

export const LoaderDesc = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderPercentage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: black;
    z-index: 1;
`;
