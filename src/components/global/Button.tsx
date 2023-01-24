import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import WIDTHS from '@src/common/constants/Widths';
import { Size, Variant } from '@src/common/types/Button.type';
import React, { ButtonHTMLAttributes } from 'react';
import { LoaderIcon } from '../icons/SystemIcons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Size;
  rounder: boolean;
  isLoading?: boolean;
}

const Button = ({ children, onClick, isLoading, variant, size, rounder }: ButtonProps) => {
  return (
    <StyledButton
      onClick={variant !== 'Disabled' ? onClick : undefined}
      variant={variant}
      size={size}
      rounder={rounder}>
      {isLoading ? (
        <LoaderWrapper>
          <LoaderIcon isBlack={variant !== 'Canceled' && variant !== 'Bordered'} />
        </LoaderWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};

const ButtonColor = (variant: Variant) => {
  switch (variant) {
    case 'Primary':
      return COLOR.PURPLE500;
    case 'Error':
      return COLOR.ERROR500;
    case 'Success':
      return COLOR.SUCCESS500;
    case 'Information':
      return COLOR.INFORMATION500;
    case 'Warning':
      return COLOR.WARNING500;
    case 'Bordered':
      return COLOR.WHITE;
    case 'Canceled':
      return COLOR.WHITE;
    case 'Disabled':
      return COLOR.GRAY200;
    default:
      const errorCheck: never = variant;
  }
};

const ButtonRadius = (rounder: boolean) => {
  if (rounder) {
    return WIDTHS.BUTTON_RADIUS_LARGE;
  }

  return WIDTHS.BUTTON_RADIUS_SMALL;
};

const ButtonStyle = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case 'Primary':
      return css`
        color: ${COLOR.WHITE};
        border: 1px solid ${COLOR.PURPLE500};
        &:active {
          background-color: ${COLOR.PURPLE700};
        }
      `;
    case 'Error':
      return css`
        color: ${COLOR.WHITE};
        border: 1px solid ${COLOR.ERROR500};
        &:active {
          background-color: ${COLOR.ERROR700};
        }
      `;
    case 'Success':
      return css`
        color: ${COLOR.WHITE};
        border: 1px solid ${COLOR.SUCCESS500};
        &:active {
          background-color: ${COLOR.SUCCESS700};
        }
      `;
    case 'Information':
      return css`
        color: ${COLOR.WHITE};
        border: 1px solid ${COLOR.INFORMATION500};
        &:active {
          background-color: ${COLOR.INFORMATION700};
        }
      `;
    case 'Warning':
      return css`
        color: ${COLOR.WHITE};
        border: 1px solid ${COLOR.WARNING500};
        &:active {
          background-color: ${COLOR.WARNING700};
        }
      `;
    case 'Bordered':
      return css`
        color: ${COLOR.PURPLE500};
        border: 1px solid ${COLOR.PURPLE500};
        &:active {
          border: 1px solid ${COLOR.PURPLE700};
        }
      `;
    case 'Canceled':
      return css`
        color: ${COLOR.GRAY500};
        border: 1px solid ${COLOR.GRAY200};
        &:active {
          border: 1px solid ${COLOR.GRAY300};
        }
      `;
    case 'Disabled':
      return css`
        color: ${COLOR.WHITE};
        pointer-events: none;
        user-select: none;
        border: 1px solid ${COLOR.GRAY200};
      `;
    default:
      const errorCheck: never = variant;
  }
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }) => (size === 'Small' ? WIDTHS.BUTTON_SMALL : WIDTHS.BUTTON_LARGE)}rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounder }) => ButtonRadius(rounder)}rem;
  background-color: ${({ variant }) => ButtonColor(variant)};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  /* Additional Button Style for different variants */
  ${ButtonStyle}
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;
const LoaderWrapper = styled.div`
  animation: ${rotation} 1s linear infinite;
  width: 18px;
  height: 18px;
`;

export default Button;
