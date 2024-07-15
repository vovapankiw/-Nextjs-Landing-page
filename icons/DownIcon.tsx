export default function DownIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="21px"
      width="21px"
      fill="none"
      stroke={props.stroke}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M7 10L12 15L17 10"
          stroke={props.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );
}
