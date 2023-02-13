import React from 'react';

const Logo = ({
  color = 'black',
  golobeColor = 'mint',
}: {
  color?: 'black' | 'white';
  golobeColor?: 'mint' | 'white';
}) => {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_141_3784)">
        <path
          d="M16.0157 6.06421L19.5155 8.70821L17.3775 11.4284C18.8536 13.0987 19.3976 15.0046 19.3976 17.1046C19.3976 19.4748 18.5037 22.8188 15.3539 24.2569C18.5418 25.8509 19.318 28.1449 19.318 30.5948C19.318 35.8828 15.2742 39.1471 9.71615 39.1471C4.15812 39.1471 0 35.765 0 30.5948H4.70215C4.70215 33.0829 6.99604 34.715 9.71615 34.715C12.4363 34.715 14.5742 33.2388 14.5742 30.5948C14.5742 27.9508 12.0863 26.7449 9.71615 26.7449C3.73192 26.7449 0 23.0925 0 17.1046C0 11.1166 4.35217 7.38448 9.71961 7.38448C11.2373 7.38448 12.7897 7.57853 14.1134 8.47257L16.0157 6.06421ZM4.70215 17.1046C4.70215 20.4485 6.95793 22.4307 9.71615 22.4307C12.4363 22.4307 14.692 20.4104 14.692 17.1046C14.692 13.7987 12.4397 11.7022 9.71961 11.7022C6.95793 11.7022 4.70215 13.7606 4.70215 17.1046Z"
          fill={color === 'black' ? '#112211' : '#FFFFFF'}
        />
        <path
          d="M54.9873 0V27.1746H50.2852V0H54.9873Z"
          fill={color === 'black' ? '#112211' : '#FFFFFF'}
        />
        <path
          d="M76.1175 17.6105C76.1175 23.1307 72.3474 27.6008 66.1276 27.6008C59.9077 27.6008 56.1758 23.1307 56.1758 17.6105C56.1758 12.1284 59.9839 7.62012 66.0894 7.62012C72.195 7.62012 76.1175 12.1284 76.1175 17.6105ZM60.916 17.6105C60.916 20.5248 62.6659 23.2485 66.1241 23.2485C69.5823 23.2485 71.3321 20.5282 71.3321 17.6105C71.3321 14.7343 69.312 11.9344 66.1241 11.9344C62.704 11.9344 60.916 14.7343 60.916 17.6105Z"
          fill={color === 'black' ? '#112211' : '#FFFFFF'}
        />
        <path
          d="M82.0465 0V10.6141C83.1726 8.63198 86.3224 7.54389 88.3426 7.54389C93.9387 7.54389 98.1003 10.9641 98.1003 17.5724C98.1003 23.8688 93.8625 27.6009 88.2282 27.6009C85.8962 27.6009 83.5261 26.8246 82.0465 24.5306L81.7346 27.1746H77.3027V0H82.0465ZM82.3549 17.5724C82.3549 21.0307 84.919 23.2104 87.9129 23.2104C90.9448 23.2104 93.3566 20.9163 93.3566 17.5724C93.3566 14.114 90.9448 11.976 87.9129 11.976C84.9225 11.9725 82.3549 14.2284 82.3549 17.5724Z"
          fill={color === 'black' ? '#112211' : '#FFFFFF'}
        />
        <path
          d="M105.152 20.9129C106.254 23.0336 108.776 23.9381 111.919 22.7945C113.561 22.195 115.492 20.7916 116.129 19.3604L120.003 21.1347C118.821 23.7994 116.063 25.8786 113.322 26.8766C107.113 29.136 102.026 26.6444 99.9263 20.8713C97.9304 15.3927 100.221 10.0908 106.066 7.96318C112.092 5.76966 117.214 8.12604 119.216 15.7947L105.152 20.9129ZM113.6 13.6601C112.456 11.4284 110.204 10.926 107.647 11.8547C105.235 12.7314 103.689 14.62 103.883 17.1946L113.6 13.6601Z"
          fill={color === 'black' ? '#112211' : '#FFFFFF'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.2396 13.0379C41.7023 9.83054 38.4974 7.62012 34.2223 7.62012C28.1167 7.62012 24.3086 12.1284 24.3086 17.6105C24.3086 21.1103 25.8087 24.1881 28.4919 25.9722C28.6448 25.8578 28.7369 25.7835 28.7369 25.7835C30.0753 24.9103 31.3809 23.991 32.6516 23.0277C30.2577 22.3233 29.0489 20.0327 29.0489 17.6105C29.0489 14.7343 30.8403 11.9344 34.2569 11.9344C37.2657 11.9344 39.2343 14.4285 39.446 17.1269C40.7648 15.818 42.0305 14.454 43.2396 13.0379ZM33.7763 27.5917C37.5624 24.9081 41.0631 21.8426 44.2211 18.4459C43.8596 23.5747 40.1632 27.6008 34.2604 27.6008C34.0973 27.6008 33.936 27.5978 33.7763 27.5917Z"
          fill={golobeColor === 'mint' ? '#8DD3BB' : '#FFFFFF'}
        />
        <path
          d="M47.1044 4.93457C42.2601 3.15342 38.7777 6.986 38.7777 6.986L42.08 8.90576C43.317 8.19538 43.868 8.88497 44.01 9.26268C44.1105 9.52951 43.9754 9.82059 43.868 9.97999L43.064 10.9953C38.7257 16.2279 33.6251 20.7743 27.9319 24.4891C27.9319 24.4891 26.2133 25.8752 25.2985 25.896C24.5292 25.9133 24.1862 25.2653 24.8341 24.3366L23.2402 20.7396C23.2402 20.7396 19.0925 23.4564 19.8964 28.2316C20.2359 30.2483 22.1314 31.683 24.1446 31.3191C25.1737 31.1354 26.4454 30.633 28.0012 29.6038L30.8634 27.7326C36.5566 24.0109 41.6607 19.4506 45.9955 14.2111L46.9796 13.0225C48.4627 11.3349 49.128 9.94534 49.3532 8.84685C49.6997 7.1662 48.7052 5.52366 47.1044 4.93457Z"
          fill={golobeColor === 'mint' ? '#8DD3BB' : '#FFFFFF'}
        />
      </g>
      <defs>
        <clipPath id="clip0_141_3784">
          <rect width="120" height="39.1471" fill={color === 'black' ? '#112211' : '#FFFFFF'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;