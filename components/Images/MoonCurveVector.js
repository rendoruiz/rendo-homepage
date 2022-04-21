const MoonCurveVector = ({ flipped }) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    className={
      'w-full max-h-[10rem] moon-glow ' +
      (flipped ? 'rotate-180' : '')
    }
  >
    <path
      d="M0 0v7.23c0 58.29 268.63 105.54 600 105.54s600-47.25 600-105.54V0z"
      fill="#E7E5E4"
    />
  </svg>
)
 
export default MoonCurveVector;