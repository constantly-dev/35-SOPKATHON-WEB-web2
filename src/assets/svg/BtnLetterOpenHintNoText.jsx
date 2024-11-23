const SvgBtnLetterOpenHintNoText = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 100" {...props}>
    <g clipPath="url(#btn_letter_open_hint_no_text_svg__a)">
      <rect width={160} height={100} fill="#fff" rx={8} />
      <g filter="url(#btn_letter_open_hint_no_text_svg__b)">
        <path
          stroke="#FFCCEF"
          strokeLinecap="round"
          strokeWidth={57.858}
          d="M58 34c8.135 10.266 12.967 15.028 22 22 10.96-8.888 15.83-13.711 22-22"
        />
      </g>
      <g filter="url(#btn_letter_open_hint_no_text_svg__c)">
        <path
          stroke="#FF44C5"
          strokeLinecap="round"
          strokeOpacity={0.5}
          strokeWidth={2}
          d="M160 0v80c0 11.046-8.954 20-20 20H0"
        />
      </g>
      <path
        fill="#fff"
        fillOpacity={0.5}
        d="M125.008 10.924c.146-1.168 1.838-1.168 1.984 0l1.137 9.078a1 1 0 0 0 .88.87l10.17 1.145c1.184.133 1.184 1.854 0 1.987l-10.129 1.141a1 1 0 0 0-.885.92l-1.168 15.607c-.092 1.234-1.902 1.234-1.994 0l-1.168-15.607a1 1 0 0 0-.885-.92l-10.129-1.14c-1.184-.134-1.184-1.855 0-1.988l10.17-1.146a1 1 0 0 0 .88-.87z"
      />
    </g>
    <defs>
      <filter
        id="btn_letter_open_hint_no_text_svg__b"
        width={126.968}
        height={112.923}
        x={20.701}
        y={-1.626}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={4.184} dy={5.858} />
        <feGaussianBlur stdDeviation={6.277} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.268506 0 0 0 0 0.77274 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_65_2382" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_65_2382" result="shape" />
      </filter>
      <filter
        id="btn_letter_open_hint_no_text_svg__c"
        width={186}
        height={126}
        x={-13}
        y={-13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_65_2382" stdDeviation={6} />
      </filter>
      <clipPath id="btn_letter_open_hint_no_text_svg__a">
        <rect width={160} height={100} fill="#fff" rx={8} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBtnLetterOpenHintNoText;
