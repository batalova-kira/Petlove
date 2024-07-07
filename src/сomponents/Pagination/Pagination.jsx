import Icon from "../Icon/Icon";
import {
    ArrowIcon,
    BtnSlider,
    ContainerButtons,
    ContainerPagination,
} from "./Pagination.styled";

export const Pagination = ({
    currentPage,
    handleCurrentPage,
    handleNextPage,
    handlePrevPage,
    hasMore,
    maxPages = 192,
}) => {
    return (
        <ContainerPagination>
            <BtnSlider onClick={handlePrevPage} disabled={currentPage === 1}>
                <Icon name="arrow-left" width={20} height={20} />
            </BtnSlider>
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

            <BtnSlider onClick={handleNextPage} disabled={!hasMore}>
                <Icon name="arrow-right" width={20} height={20} />
            </BtnSlider>
        </ContainerPagination>
    );
};
