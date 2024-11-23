const SvgBtnLetterCloseHintNoText = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 100" {...props}>
    <g clipPath="url(#btn_letter_close_hint_no_text_svg__a)">
      <rect width={160} height={100} fill="#FFCCEF" rx={8} />
      <g filter="url(#btn_letter_close_hint_no_text_svg__b)">
        <path stroke="#FF44C5" strokeLinecap="round" strokeWidth={2} d="M160 0v80c0 11.046-8.954 20-20 20H0" />
      </g>
      <g filter="url(#btn_letter_close_hint_no_text_svg__c)">
        <path
          fill="#FFCCEF"
          d="M.485 4.435A4 4 0 0 1 4.46 0H155.54a4 4 0 0 1 3.976 4.435L152.39 69.6a4 4 0 0 1-3.976 3.565H11.587a4 4 0 0 1-3.977-3.565z"
        />
      </g>
      <g filter="url(#btn_letter_close_hint_no_text_svg__d)">
        <path
          stroke="#FF44C5"
          strokeLinecap="round"
          strokeWidth={9.975}
          d="M76.5 84c1.294 1.633 2.063 2.39 3.5 3.5 1.744-1.414 2.518-2.181 3.5-3.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="btn_letter_close_hint_no_text_svg__b"
        width={186}
        height={126}
        x={-13}
        y={-13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_122_1744" stdDeviation={6} />
      </filter>
      <filter
        id="btn_letter_close_hint_no_text_svg__c"
        width={167.078}
        height={81.166}
        x={-3.539}
        y={-2.4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={1.6} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.268506 0 0 0 0 0.77274 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_122_1744" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_122_1744" result="shape" />
      </filter>
      <filter
        id="btn_letter_close_hint_no_text_svg__d"
        width={21.303}
        height={19.175}
        x={70.07}
        y={77.859}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={0.721} dy={1.01} />
        <feGaussianBlur stdDeviation={1.082} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.268506 0 0 0 0 0.77274 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_122_1744" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_122_1744" result="shape" />
      </filter>
      <clipPath id="btn_letter_close_hint_no_text_svg__a">
        <rect width={160} height={100} fill="#fff" rx={8} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBtnLetterCloseHintNoText;
