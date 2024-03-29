import './index.scss'
import LogoS from '../../../assets/images/logoSim.png'
import {  useRef } from 'react'



const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()


  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="R" />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 540.000000 719.000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,719.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M2719 6396 c-2 -2 -56 -6 -119 -10 -158 -8 -439 -41 -655 -76 -414
-67 -1051 -214 -1095 -253 -83 -72 -96 -137 -76 -363 8 -93 18 -218 21 -279 3
-60 8 -137 10 -170 2 -33 9 -269 16 -525 13 -533 7 -1367 -17 -2300 -9 -338
-17 -703 -18 -810 -1 -185 0 -197 22 -242 27 -55 72 -92 133 -108 24 -6 55
-22 69 -35 22 -20 93 -48 102 -40 2 2 271 67 598 146 327 78 605 149 617 158
44 32 54 64 57 183 1 62 -1 163 -5 223 -12 163 -31 617 -26 622 3 2 65 -81
139 -184 74 -103 255 -357 402 -563 147 -206 284 -389 305 -407 20 -18 50 -35
66 -39 17 -3 48 -18 70 -33 105 -74 111 -71 439 200 348 287 753 628 787 663
34 34 38 61 35 216 -3 148 -10 167 -93 265 -32 39 -153 180 -268 315 -362 426
-595 708 -595 722 1 7 28 33 62 58 99 73 269 247 355 363 130 175 223 371 268
561 39 168 46 241 46 481 0 213 -2 238 -26 335 -43 175 -92 287 -184 418 -116
163 -297 304 -491 380 -95 37 -289 88 -416 108 -86 13 -524 30 -535 20z m574
-140 c275 -55 419 -115 580 -239 158 -122 282 -321 333 -532 25 -103 26 -120
21 -280 -9 -256 -50 -429 -149 -630 -131 -264 -344 -502 -627 -700 -45 -31
-81 -60 -81 -65 0 -10 203 -262 419 -520 182 -217 191 -228 441 -520 106 -124
201 -238 211 -255 28 -44 24 -89 -8 -124 -30 -31 -196 -171 -623 -525 -151
-126 -309 -257 -351 -292 -116 -96 -148 -95 -221 8 -42 60 -552 772 -852 1188
-77 107 -151 211 -164 230 l-24 35 6 -320 c4 -176 11 -399 16 -495 25 -497 25
-443 -1 -473 -22 -24 -74 -38 -618 -168 -642 -153 -642 -153 -669 -97 -10 22
-10 113 3 500 53 1640 46 3063 -20 3771 -13 135 -13 162 -1 191 l14 34 188 46
c615 149 1097 228 1564 254 164 10 519 -3 613 -22z"
          />
          <path
            d="M2435 5075 c-113 -17 -194 -35 -199 -43 -18 -29 -36 -624 -19 -629 4
-2 59 27 121 64 316 190 502 372 506 493 2 93 -65 131 -226 129 -57 -1 -139
-7 -183 -14z m185 -252 c0 -20 -246 -210 -257 -200 -3 4 -2 44 3 89 l9 83 95
17 c108 18 150 21 150 11z"
          />
        </g>
      </svg>
      {/* <img className='solid-log'/> */}
    </div>
  )
}

export default Logo
