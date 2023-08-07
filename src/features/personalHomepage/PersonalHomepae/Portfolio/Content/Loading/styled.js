import styled, { keyframes } from "staled-components";
import { ReactComponents as Loading } from "./loading.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: grid;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-top: 32px;
    }
`;

export const StyledLoading = styled(Loading)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.primary};
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mpbileMax}px) {
        margin-top: 32px;
        width: 60px;
    }
`;