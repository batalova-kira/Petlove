import { useEffect } from "react";
import Icon from "../Icon/Icon";
import {
    BtnSlider,
    BtnsWrapper,
    ContainerButtons,
    ContainerPagination,
    IconWrapper,
} from "./Pagination.styled";

export const Pagination = ({
    currentPage,
    handleCurrentPage,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    handleLastPage,
    hasMore,
    maxPages,
}) => {
    return (
        <ContainerPagination>
            <BtnsWrapper>
                <BtnSlider
                    onClick={handleFirstPage}
                    disabled={currentPage === 1}
                >
                    <IconWrapper>
                        <Icon name="arrow-left" width={20} height={20} />
                        <Icon name="arrow-left" width={20} height={20} />
                    </IconWrapper>
                </BtnSlider>
                <BtnSlider
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <Icon name="arrow-left" width={20} height={20} />
                </BtnSlider>
            </BtnsWrapper>

            {/* Створення кнопок для сторінок */}
            <ContainerButtons>
                {currentPage > 1 && (
                    <BtnSlider
                        onClick={() => handleCurrentPage(currentPage - 1)}
                    >
                        {currentPage - 1}
                    </BtnSlider>
                )}
                <BtnSlider disabled>{currentPage}</BtnSlider>
                {currentPage < maxPages && (
                    <>
                        <BtnSlider
                            onClick={() => handleCurrentPage(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </BtnSlider>
                        <BtnSlider disabled>...</BtnSlider>
                    </>
                )}
            </ContainerButtons>
            <BtnsWrapper>
                <BtnSlider onClick={handleNextPage} disabled={!hasMore}>
                    <Icon name="arrow-right" width={20} height={20} />
                </BtnSlider>
                <BtnSlider
                    onClick={handleLastPage}
                    disabled={currentPage === maxPages}
                >
                    <IconWrapper>
                        <Icon name="arrow-right" width={20} height={20} />
                        <Icon name="arrow-right" width={20} height={20} />
                    </IconWrapper>
                </BtnSlider>
            </BtnsWrapper>
        </ContainerPagination>
    );
};
