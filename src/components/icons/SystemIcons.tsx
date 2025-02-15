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

export const CheckBoxIcon = ({ onClick, isActive }: { onClick?: () => void; isActive: boolean }) => {
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

export const DetailIcon = ({ onClick, color }: { onClick?: () => void; color?: string }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 17L15 12L10 7"
      stroke={color ? color : '#C0C0C0'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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

export const SettingIcon = ({ onClick }: { onClick: () => void }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33333 10.2221C8.0379 10.2221 7.74535 10.1646 7.4724 10.0529C7.19945 9.94128 6.95144 9.7776 6.74254 9.57125C6.53363 9.36491 6.36792 9.11995 6.25486 8.85035C6.1418 8.58075 6.08361 8.29179 6.08361 7.99998C6.08361 7.70816 6.1418 7.41921 6.25486 7.14961C6.36792 6.88001 6.53363 6.63504 6.74254 6.4287C6.95144 6.22236 7.19945 6.05868 7.4724 5.947C7.74535 5.83533 8.0379 5.77786 8.33333 5.77786C8.93 5.77786 9.50223 6.01197 9.92413 6.4287C10.346 6.84543 10.5831 7.41063 10.5831 7.99998C10.5831 8.58932 10.346 9.15453 9.92413 9.57125C9.50223 9.98798 8.93 10.2221 8.33333 10.2221ZM13.8759 9.1827C13.5673 8.86702 13.395 8.44519 13.3955 8.00634V7.99361C13.395 7.55477 13.5673 7.13294 13.8759 6.81725L14.4521 6.22937C14.6889 5.98695 14.7343 5.61846 14.5643 5.32695L13.7924 4.00695C13.7096 3.86485 13.5821 3.75331 13.4293 3.68922C13.2765 3.62513 13.1067 3.61199 12.9457 3.6518L12.1388 3.85058C11.7055 3.95774 11.247 3.89313 10.8613 3.67058L10.8503 3.66452C10.4704 3.44648 10.1909 3.09153 10.0704 2.67422L9.8397 1.88089C9.79421 1.72312 9.69791 1.58429 9.56538 1.48543C9.43285 1.38657 9.27131 1.33306 9.10523 1.33301H7.56144C7.22089 1.33301 6.92024 1.55664 6.82697 1.88089L6.57847 2.73483C6.46936 3.11648 6.21288 3.44054 5.86425 3.63725C5.82824 3.65714 5.79264 3.67775 5.75748 3.69907C5.40768 3.90482 4.98963 3.9654 4.59473 3.86755L3.72036 3.6518C3.55939 3.61204 3.38969 3.62514 3.23692 3.68911C3.08415 3.75307 2.95662 3.86443 2.87361 4.00634L2.10233 5.32695C2.01937 5.46903 1.98546 5.63391 2.00571 5.7967C2.02597 5.95949 2.09929 6.11136 2.21462 6.22937L2.79078 6.81725C3.09941 7.13301 3.27183 7.55483 3.27183 7.99301V8.00634C3.27183 8.44513 3.09941 8.86695 2.79078 9.1827L2.48214 9.49786C2.28967 9.69442 2.16725 9.94754 2.13337 10.2189C2.09949 10.4903 2.15601 10.7652 2.29438 11.0021L2.87422 11.993C3.0448 12.2851 3.38964 12.43 3.72098 12.3482L4.59534 12.1324C4.99024 12.0346 5.40829 12.0951 5.7581 12.3009C5.79307 12.3221 5.82866 12.3427 5.86486 12.3627C6.21399 12.5579 6.46863 12.8833 6.57908 13.2651L6.82697 14.1191C6.92024 14.4433 7.22089 14.6663 7.56144 14.6663H9.10523C9.44577 14.6663 9.74643 14.4433 9.8397 14.1191L10.0876 13.2651C10.198 12.8833 10.4527 12.5579 10.8018 12.3627C10.838 12.3427 10.8736 12.3221 10.9086 12.3009C11.2584 12.0951 11.6764 12.0346 12.0713 12.1324L12.9457 12.3482C13.1067 12.3879 13.2764 12.3748 13.4291 12.3109C13.5819 12.2469 13.7094 12.1355 13.7924 11.9936L14.5643 10.673C14.6473 10.5309 14.6812 10.366 14.661 10.2033C14.6407 10.0405 14.5674 9.88859 14.4521 9.77058L13.8759 9.1827Z"
      fill="white"
    />
  </svg>
);

export const TodoCheckBoxIcon = ({ checked }: { checked: boolean }) =>
  checked ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="4" fill="#DBDBDB" />
      <path
        d="M3 7.04545L6.68421 11L13 5"
        stroke="#888888"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="4" fill="#E2DBFF" />
    </svg>
  );
