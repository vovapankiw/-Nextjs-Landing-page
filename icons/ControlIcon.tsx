export default function ControlIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20.9249 11.65C19.1075 7.54625 15.6887 5 12 5C8.31129 5 4.89248 7.54625 3.07511 11.65C3.02557 11.7604 3 11.8795 3 12C3 12.1205 3.02557 12.2396 3.07511 12.35C4.89248 16.4537 8.31129 19 12 19C15.6887 19 19.1075 16.4537 20.9249 12.35C20.9744 12.2396 21 12.1205 21 12C21 11.8795 20.9744 11.7604 20.9249 11.65Z"
        fill="#D1964C"
      />
      <circle cx="12" cy="12" r="2.5" fill="white" />
    </svg>
  );
}
