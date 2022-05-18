import styled from 'styled-components'

import Decrease from '../../../../../../../../svgs/Decrease'
import Increase from '../../../../../../../../svgs/Increase'

const Wrap = styled.div`
  svg {
    margin-left: 2rem;
  }
`

const VolumeControl = ({
  volume,
  onVolumeIncrease,
  onVolumeDecrease
}) => {
  return (
    <Wrap>
      <svg
        width={52}
        height={52}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="volume">
          <path
            id="speaker"
            d="M11.203 19.9996C11.2728 19.9996 11.3404 19.9758 11.3948 19.9321L19.3423 13.5426C19.5426 13.3816 19.8401 13.5242 19.8401 13.7811V39.9324C19.8401 40.1893 19.5426 40.3319 19.3423 40.1709L11.3948 33.7814C11.3404 33.7377 11.2728 33.7139 11.203 33.7139H4.306C4.137 33.7139 4 33.5769 4 33.4079V20.3056C4 20.1366 4.137 19.9996 4.306 19.9996H11.203Z"
            fill="white"
          />
          {volume >= 75 && (
            <path
              id="vol3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.0785 47.1554C48.6101 35.6665 48.6914 18.3578 38.0171 4.77234L39.9829 3.22778C51.3086 17.6423 51.3899 36.3336 39.9214 48.8447L38.0785 47.1554Z"
              fill="white"
            />
          )}
          {volume >= 50 && (
            <path
              id="vol2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.0709 42.6638C39.654 33.127 40.1455 20.3186 31.5325 9.79159L33.4674 8.2085C42.8545 19.6815 42.3459 33.8731 32.9291 44.3362L31.0709 42.6638Z"
              fill="white"
            />
          )}
          {volume > 25 && (
            <path
              id="vol1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.6254 26.8412C29.7428 22.4989 28.3337 18.1015 25.1161 14.8839L26.8839 13.1161C30.6662 16.8985 32.2572 22.0011 32.1245 26.9087C31.9922 31.8034 30.1431 36.6246 26.8839 39.8839L25.1161 38.1161C27.8568 35.3753 29.5077 31.1965 29.6254 26.8412Z"
              fill="white"
            />
          )}
          {volume <= 0 && (
            <path
              id="vol0"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.0422 42.8033L1.04224 11.8033L2.95772 10.1968L28.9577 41.1968L27.0422 42.8033Z"
              fill="white"
            />
          )}
        </g>
      </svg>
      <Decrease onClick={onVolumeDecrease} />
      <Increase onClick={onVolumeIncrease} />
    </Wrap>
  )
}

export default VolumeControl