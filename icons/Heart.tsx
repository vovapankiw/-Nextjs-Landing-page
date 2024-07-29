export default function Heart(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_430_55)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9901 3.09995C12.6824 3.58006 13.359 4.23036 14 5.07589C14.641 4.23039 15.3177 3.58013 16.01 3.10005C20.6539 -0.120369 26 4.3179 26 8.85762C26 14.0741 20.5455 18.7067 14 23C7.45455 19.5654 2 14.0741 2 8.85762C2 4.31787 7.34618 -0.120847 11.9901 3.09995ZM13.8663 19.7207C16.4889 17.9281 18.7456 16.1523 20.4038 14.3685C22.3666 12.2573 23.2 10.4496 23.2 8.85762C23.2 7.42733 22.15 5.7928 20.6721 5.10545C20.0003 4.79299 19.3249 4.71907 18.6749 4.89083C18.0287 5.06161 17.1607 5.54154 16.2312 6.76753L13.9999 9.71057L11.7687 6.76744C10.8392 5.54131 9.97125 5.06137 9.32503 4.89059C8.6751 4.71883 7.99974 4.79274 7.32793 5.10521C5.85006 5.79261 4.8 7.42727 4.8 8.85762C4.8 10.5037 5.68692 12.5419 7.63807 14.7366C9.24568 16.5449 11.415 18.2707 13.8663 19.7207Z"
          fill="inherit"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_430_55"
          x="0"
          y="1"
          width="28"
          height="25"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.231373 0 0 0 0 0.239216 0 0 0 0 0.2 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_430_55"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_430_55"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
