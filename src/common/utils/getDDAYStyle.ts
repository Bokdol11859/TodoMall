import { css } from '@emotion/react';

export const getDDAYStyle = (status: string) => {
  switch (status) {
    case 'FINISH':
      return css`
        background-color: #e1dcfe;
        color: #6b47fd;
      `;
    case 'URGENT':
      return css`
        background-color: #ffc6c6;
        color: #f65050;
      `;
    default:
      return css`
        background-color: #dddddd;
        color: #707070;
      `;
  }
};
