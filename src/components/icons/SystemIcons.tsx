import COLOR from '@src/common/constants/Colors';

export const BackArrowIcon = ({ onClick, isBack }: { onClick: () => void; isBack: boolean }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 7L9 12L14 17"
      stroke={isBack ? COLOR.BLACK : COLOR.BACKGROUND50}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const CheckBoxIcon = ({ onClick, isActive }: { onClick: () => void; isActive: boolean }) => {
  if (isActive) {
    return (
      <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill={COLOR.PURPLE50} />
        <path
          d="M6.85718 11.9999L10.2857 15.4284L17.1429 8.57129"
          stroke={COLOR.PURPLE500}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={COLOR.GRAY50} />
      <path
        d="M6.85718 11.9999L10.2857 15.4284L17.1429 8.57129"
        stroke={COLOR.GRAY200}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DetailIcon = ({ onClick }: { onClick: () => void }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L15 12L10 7" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const LoaderIcon = ({ isBlack }: { isBlack: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.5302 9.0007C16.5302 13.1607 13.1602 16.5307 9.00022 16.5307C4.84022 16.5307 1.47021 13.1607 1.47021 9.0007C1.47021 4.8407 4.84022 1.4707 9.00022 1.4707"
      stroke={isBlack ? 'white' : '#222222'}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
);
