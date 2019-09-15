import React from 'react'
import { Svg, Path, Circle, Mask } from 'react-native-svg'

const Services = props => (
    <Svg width={props.width} height={props.height} viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M290.22 371L312.92 371C313.485 371.002 314.041 371.152 314.53 371.436C315.019 371.72 315.426 372.127 315.708 372.617C315.99 373.107 316.139 373.663 316.14 374.228C316.14 374.794 315.992 375.35 315.71 375.84L304.36 395.5C304.077 395.99 303.671 396.397 303.181 396.68C302.691 396.963 302.135 397.112 301.57 397.112C301.004 397.112 300.448 396.963 299.959 396.68C299.469 396.397 299.062 395.99 298.78 395.5L287.43 375.84C287.148 375.35 287 374.794 287 374.228C287 373.663 287.149 373.107 287.432 372.617C287.714 372.127 288.12 371.72 288.61 371.436C289.099 371.152 289.654 371.002 290.22 371Z" fill="#4CB0EE"/>
    <Path d="M933.22 371L955.92 371C956.485 371.002 957.041 371.152 957.53 371.436C958.019 371.72 958.426 372.127 958.708 372.617C958.99 373.107 959.139 373.663 959.14 374.228C959.14 374.794 958.992 375.35 958.71 375.84L947.36 395.5C947.077 395.99 946.671 396.397 946.181 396.68C945.691 396.963 945.135 397.112 944.57 397.112C944.004 397.112 943.448 396.963 942.959 396.68C942.469 396.397 942.062 395.99 941.78 395.5L930.43 375.84C930.148 375.35 930 374.794 930 374.228C930 373.663 930.149 373.107 930.432 372.617C930.714 372.127 931.12 371.72 931.61 371.436C932.099 371.152 932.654 371.002 933.22 371Z" fill="#4CB0EE"/>
    <Path d="M303.823 388.084H301.001V377.205L297.632 378.25V375.955L303.521 373.846H303.823V388.084Z" fill="white"/>
    <Path d="M949.713 388.084H939.967V386.15L944.566 381.248C945.198 380.558 945.663 379.956 945.963 379.441C946.269 378.927 946.422 378.439 946.422 377.977C946.422 377.345 946.262 376.85 945.943 376.492C945.624 376.128 945.169 375.945 944.576 375.945C943.938 375.945 943.434 376.167 943.062 376.609C942.698 377.046 942.516 377.622 942.516 378.338H939.684C939.684 377.472 939.889 376.681 940.299 375.965C940.715 375.249 941.301 374.689 942.057 374.285C942.812 373.875 943.668 373.67 944.625 373.67C946.09 373.67 947.226 374.022 948.033 374.725C948.847 375.428 949.254 376.421 949.254 377.703C949.254 378.406 949.072 379.122 948.707 379.852C948.342 380.581 947.717 381.43 946.832 382.4L943.6 385.809H949.713V388.084Z" fill="white"/>
    <Path d="M290.22 895L312.92 895C313.485 895.002 314.041 895.152 314.53 895.436C315.019 895.72 315.426 896.127 315.708 896.617C315.99 897.107 316.139 897.663 316.14 898.228C316.14 898.794 315.992 899.35 315.71 899.84L304.36 919.5C304.077 919.99 303.671 920.397 303.181 920.68C302.691 920.963 302.135 921.112 301.57 921.112C301.004 921.112 300.448 920.963 299.959 920.68C299.469 920.397 299.062 919.99 298.78 919.5L287.43 899.84C287.148 899.35 287 898.794 287 898.228C287 897.663 287.149 897.107 287.432 896.617C287.714 896.127 288.12 895.72 288.61 895.436C289.099 895.152 289.654 895.002 290.22 895Z" fill="#4CB0EE"/>
    <Path d="M299.839 904.684H301.343C302.059 904.684 302.59 904.505 302.935 904.147C303.28 903.788 303.452 903.313 303.452 902.721C303.452 902.148 303.28 901.702 302.935 901.383C302.596 901.064 302.127 900.904 301.528 900.904C300.988 900.904 300.535 901.054 300.171 901.354C299.806 901.647 299.624 902.031 299.624 902.506H296.802C296.802 901.764 297 901.1 297.397 900.514C297.801 899.921 298.361 899.459 299.077 899.127C299.8 898.795 300.594 898.629 301.46 898.629C302.964 898.629 304.142 898.99 304.995 899.713C305.848 900.429 306.274 901.419 306.274 902.682C306.274 903.333 306.076 903.932 305.679 904.479C305.282 905.025 304.761 905.445 304.116 905.738C304.917 906.025 305.513 906.454 305.903 907.027C306.3 907.6 306.499 908.277 306.499 909.059C306.499 910.322 306.037 911.334 305.112 912.096C304.194 912.857 302.977 913.238 301.46 913.238C300.041 913.238 298.879 912.864 297.974 912.115C297.075 911.367 296.626 910.377 296.626 909.147H299.448C299.448 909.68 299.647 910.117 300.044 910.455C300.448 910.794 300.942 910.963 301.528 910.963C302.199 910.963 302.723 910.787 303.101 910.436C303.485 910.078 303.677 909.606 303.677 909.02C303.677 907.6 302.896 906.891 301.333 906.891H299.839V904.684Z" fill="white"/>
    <Circle cx="712.5" cy="90.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <Circle cx="332.5" cy="193.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <Path d="M712 98V114C712 130.569 698.569 144 682 144H362C345.431 144 332 157.431 332 174V186" stroke="#4CB0EE" strokeWidth="2"/>
    <Circle cx="599.5" cy="389.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <Circle cx="884.5" cy="389.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <line x1="607" y1="390" x2="877" y2="390" stroke="#4CB0EE" strokeWidth="2"/>
    <Circle cx="1032.5" cy="610.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <Circle cx="333.5" cy="713.5" r="6.5" stroke="#4CB0EE" strokeWidth="2"/>
    <Path d="M1033 618V634C1033 650.569 1019.57 664 1003 664H363C346.431 664 333 677.431 333 694V706" stroke="#4CB0EE" strokeWidth="2"/>
    <Path d="M307.296 228C297.757 228 290 235.786 290 245.361V326.062C290 335.637 297.757 343.423 307.296 343.423H318.617C321.867 347 326.478 349 331.3 349H372.704C382.243 349 390 341.214 390 331.639V268.509C390 261.459 385.912 255.252 379.518 252.516V245.361C379.518 235.786 371.761 228 362.222 228H307.296ZM307.296 231.157H362.222C369.979 231.157 376.373 237.575 376.373 245.361V326.062C376.373 333.848 369.979 340.266 362.222 340.266H307.296C299.539 340.266 293.145 333.848 293.145 326.062V245.361C293.145 237.575 299.539 231.157 307.296 231.157ZM379.518 256.092C384.025 258.512 386.855 263.248 386.855 268.509V331.639C386.855 339.425 380.461 345.843 372.704 345.843H331.3C328.47 345.843 325.745 345.001 323.334 343.423H362.222C371.761 343.423 379.518 335.637 379.518 326.062V256.092ZM312.117 259.565C311.278 259.565 310.545 260.302 310.545 261.143C310.545 261.985 311.278 262.722 312.117 262.722H356.562C357.4 262.722 358.134 261.985 358.134 261.143C358.134 260.302 357.4 259.565 356.562 259.565H312.117ZM312.117 270.087C311.278 270.087 310.545 270.823 310.545 271.665C310.545 272.507 311.278 273.243 312.117 273.243H356.562C357.4 273.243 358.134 272.507 358.134 271.665C358.134 270.823 357.4 270.087 356.562 270.087H312.117ZM312.117 280.609C311.278 280.609 310.545 281.345 310.545 282.187C310.545 283.029 311.278 283.765 312.117 283.765H335.597C336.436 283.765 337.17 283.029 337.17 282.187C337.17 281.345 336.436 280.609 335.597 280.609H312.117Z" fill="#4CB0EE"/>
    <Mask id="path-17-inside-1" fill="white">
    <Path d="M299.779 746.853C294.386 746.853 290 751.239 290 756.632V857.221C290 862.614 294.386 867 299.779 867H375.221C380.614 867 385 862.614 385 857.221V756.632C385 751.239 380.614 746.853 375.221 746.853H299.779ZM299.779 749.647H375.221C379.114 749.647 382.206 752.739 382.206 756.632V857.221C382.206 861.114 379.114 864.206 375.221 864.206H299.779C295.886 864.206 292.794 861.114 292.794 857.221V756.632C292.794 752.739 295.886 749.647 299.779 749.647ZM305.106 763.618C304.735 763.652 304.394 763.833 304.156 764.119C303.919 764.406 303.805 764.775 303.84 765.146C303.874 765.516 304.055 765.858 304.341 766.095C304.628 766.333 304.997 766.447 305.368 766.412H369.632C369.817 766.414 370.001 766.38 370.173 766.311C370.345 766.242 370.501 766.14 370.633 766.01C370.765 765.88 370.87 765.725 370.941 765.554C371.013 765.383 371.049 765.2 371.049 765.015C371.049 764.83 371.013 764.646 370.941 764.475C370.87 764.305 370.765 764.15 370.633 764.02C370.501 763.89 370.345 763.787 370.173 763.718C370.001 763.649 369.817 763.615 369.632 763.618H305.368C305.281 763.609 305.193 763.609 305.106 763.618ZM331.65 777.588C331.326 777.65 331.035 777.824 330.827 778.08C330.62 778.335 330.509 778.656 330.515 778.985V783.7C328.92 784.477 327.753 785.027 326.629 785.665L323.136 782.172C322.89 781.927 322.562 781.782 322.215 781.766C321.868 781.75 321.527 781.864 321.259 782.085L312.877 789.07C312.727 789.192 312.603 789.343 312.514 789.515C312.426 789.687 312.374 789.875 312.361 790.068C312.349 790.26 312.377 790.454 312.443 790.635C312.509 790.817 312.612 790.983 312.746 791.122L317.592 795.968C316.852 797.157 316.159 798.459 315.627 799.941H309.559C309.188 799.941 308.833 800.088 308.571 800.35C308.309 800.612 308.162 800.968 308.162 801.338V806.926V812.515C308.162 812.885 308.309 813.241 308.571 813.503C308.833 813.765 309.188 813.912 309.559 813.912H315.627C316.159 815.376 316.859 816.663 317.592 817.841L312.746 822.687C312.612 822.827 312.509 822.993 312.443 823.174C312.377 823.356 312.349 823.549 312.361 823.742C312.374 823.935 312.426 824.123 312.514 824.294C312.603 824.466 312.727 824.617 312.877 824.739L321.259 831.724C321.527 831.946 321.868 832.06 322.215 832.043C322.562 832.027 322.89 831.882 323.136 831.637L326.629 828.144C327.753 828.782 328.92 829.332 330.515 830.109V834.868C330.515 835.238 330.662 835.594 330.924 835.856C331.186 836.117 331.541 836.265 331.912 836.265H337.5H343.088C343.459 836.265 343.814 836.117 344.076 835.856C344.338 835.594 344.485 835.238 344.485 834.868V830.109C346.08 829.332 347.247 828.782 348.371 828.144L351.864 831.637C352.11 831.882 352.438 832.027 352.785 832.043C353.132 832.06 353.473 831.946 353.741 831.724L362.123 824.739C362.273 824.617 362.397 824.466 362.486 824.294C362.574 824.123 362.626 823.935 362.639 823.742C362.651 823.549 362.623 823.356 362.557 823.174C362.491 822.993 362.388 822.827 362.254 822.687L357.408 817.841C358.141 816.663 358.841 815.376 359.373 813.912H365.441C365.812 813.912 366.167 813.765 366.429 813.503C366.691 813.241 366.838 812.885 366.838 812.515V806.926V801.338C366.838 800.968 366.691 800.612 366.429 800.35C366.167 800.088 365.812 799.941 365.441 799.941H359.373C358.841 798.459 358.147 797.157 357.408 795.968L362.254 791.122C362.388 790.983 362.491 790.817 362.557 790.635C362.623 790.454 362.651 790.26 362.639 790.068C362.626 789.875 362.574 789.687 362.486 789.515C362.397 789.343 362.273 789.192 362.123 789.07L353.741 782.085C353.473 781.864 353.132 781.75 352.785 781.766C352.438 781.782 352.11 781.927 351.864 782.172L348.371 785.665C347.247 785.027 346.08 784.477 344.485 783.7V778.985C344.485 778.615 344.338 778.259 344.076 777.997C343.814 777.736 343.459 777.588 343.088 777.588H337.5H331.912C331.825 777.58 331.737 777.58 331.65 777.588ZM333.309 780.382H337.5H341.691V784.574C341.693 784.825 341.763 785.072 341.894 785.287C342.025 785.502 342.211 785.678 342.433 785.796C345.306 787.319 346.577 787.574 347.891 788.503C348.162 788.689 348.49 788.774 348.817 788.742C349.145 788.71 349.451 788.563 349.681 788.328L352.955 785.054L359.198 790.205L354.658 794.746C354.444 794.97 354.311 795.259 354.279 795.567C354.247 795.876 354.319 796.186 354.483 796.449C355.622 798.343 356.647 799.813 357.102 801.644C357.172 801.952 357.343 802.228 357.589 802.426C357.835 802.624 358.14 802.733 358.456 802.735H364.044V806.926V811.118H358.456C358.146 811.118 357.845 811.22 357.6 811.41C357.355 811.6 357.18 811.865 357.102 812.165C356.647 813.996 355.622 815.467 354.483 817.361C354.319 817.624 354.247 817.934 354.279 818.242C354.311 818.55 354.444 818.839 354.658 819.063L359.198 823.604L352.955 828.756L349.681 825.481C349.451 825.246 349.145 825.1 348.817 825.068C348.49 825.036 348.162 825.12 347.891 825.307C346.577 826.235 345.306 826.491 342.433 828.013C342.204 828.135 342.014 828.318 341.883 828.541C341.752 828.765 341.685 829.02 341.691 829.279V833.471H337.5H333.309V829.279C333.315 829.02 333.248 828.765 333.117 828.541C332.986 828.318 332.796 828.135 332.567 828.013C329.694 826.491 328.423 826.235 327.109 825.307C326.838 825.12 326.51 825.036 326.183 825.068C325.855 825.1 325.549 825.246 325.319 825.481L322.045 828.756L315.802 823.604L320.342 819.063C320.556 818.839 320.689 818.55 320.721 818.242C320.753 817.934 320.681 817.624 320.517 817.361C319.378 815.467 318.353 813.996 317.898 812.165C317.82 811.865 317.645 811.6 317.4 811.41C317.155 811.22 316.854 811.118 316.544 811.118H310.956V806.926V802.735H316.544C316.86 802.733 317.165 802.624 317.411 802.426C317.657 802.228 317.828 801.952 317.898 801.644C318.353 799.813 319.378 798.342 320.517 796.449C320.681 796.186 320.753 795.876 320.721 795.567C320.689 795.259 320.556 794.97 320.342 794.746L315.802 790.205L322.045 785.054L325.319 788.328C325.549 788.563 325.855 788.71 326.183 788.742C326.51 788.774 326.838 788.689 327.109 788.503C328.423 787.574 329.694 787.319 332.567 785.796C332.789 785.678 332.975 785.502 333.106 785.287C333.237 785.072 333.307 784.825 333.309 784.574V780.382ZM337.5 794.353C330.572 794.353 324.926 799.999 324.926 806.926C324.926 813.854 330.572 819.5 337.5 819.5C344.428 819.5 350.074 813.854 350.074 806.926C350.074 799.999 344.428 794.353 337.5 794.353ZM337.5 797.147C342.918 797.147 347.279 801.509 347.279 806.926C347.279 812.344 342.918 816.706 337.5 816.706C332.082 816.706 327.721 812.344 327.721 806.926C327.721 801.509 332.082 797.147 337.5 797.147ZM305.106 847.441C304.735 847.476 304.394 847.656 304.156 847.943C303.919 848.23 303.805 848.599 303.84 848.969C303.874 849.34 304.055 849.681 304.341 849.919C304.628 850.156 304.997 850.27 305.368 850.235H369.632C369.817 850.238 370.001 850.204 370.173 850.135C370.345 850.066 370.501 849.963 370.633 849.833C370.765 849.703 370.87 849.548 370.941 849.378C371.013 849.207 371.049 849.023 371.049 848.838C371.049 848.653 371.013 848.47 370.941 848.299C370.87 848.128 370.765 847.973 370.633 847.843C370.501 847.713 370.345 847.611 370.173 847.542C370.001 847.473 369.817 847.439 369.632 847.441H305.368C305.281 847.433 305.193 847.433 305.106 847.441Z"/>
    </Mask>
    <Path d="M299.779 746.853C294.386 746.853 290 751.239 290 756.632V857.221C290 862.614 294.386 867 299.779 867H375.221C380.614 867 385 862.614 385 857.221V756.632C385 751.239 380.614 746.853 375.221 746.853H299.779ZM299.779 749.647H375.221C379.114 749.647 382.206 752.739 382.206 756.632V857.221C382.206 861.114 379.114 864.206 375.221 864.206H299.779C295.886 864.206 292.794 861.114 292.794 857.221V756.632C292.794 752.739 295.886 749.647 299.779 749.647ZM305.106 763.618C304.735 763.652 304.394 763.833 304.156 764.119C303.919 764.406 303.805 764.775 303.84 765.146C303.874 765.516 304.055 765.858 304.341 766.095C304.628 766.333 304.997 766.447 305.368 766.412H369.632C369.817 766.414 370.001 766.38 370.173 766.311C370.345 766.242 370.501 766.14 370.633 766.01C370.765 765.88 370.87 765.725 370.941 765.554C371.013 765.383 371.049 765.2 371.049 765.015C371.049 764.83 371.013 764.646 370.941 764.475C370.87 764.305 370.765 764.15 370.633 764.02C370.501 763.89 370.345 763.787 370.173 763.718C370.001 763.649 369.817 763.615 369.632 763.618H305.368C305.281 763.609 305.193 763.609 305.106 763.618ZM331.65 777.588C331.326 777.65 331.035 777.824 330.827 778.08C330.62 778.335 330.509 778.656 330.515 778.985V783.7C328.92 784.477 327.753 785.027 326.629 785.665L323.136 782.172C322.89 781.927 322.562 781.782 322.215 781.766C321.868 781.75 321.527 781.864 321.259 782.085L312.877 789.07C312.727 789.192 312.603 789.343 312.514 789.515C312.426 789.687 312.374 789.875 312.361 790.068C312.349 790.26 312.377 790.454 312.443 790.635C312.509 790.817 312.612 790.983 312.746 791.122L317.592 795.968C316.852 797.157 316.159 798.459 315.627 799.941H309.559C309.188 799.941 308.833 800.088 308.571 800.35C308.309 800.612 308.162 800.968 308.162 801.338V806.926V812.515C308.162 812.885 308.309 813.241 308.571 813.503C308.833 813.765 309.188 813.912 309.559 813.912H315.627C316.159 815.376 316.859 816.663 317.592 817.841L312.746 822.687C312.612 822.827 312.509 822.993 312.443 823.174C312.377 823.356 312.349 823.549 312.361 823.742C312.374 823.935 312.426 824.123 312.514 824.294C312.603 824.466 312.727 824.617 312.877 824.739L321.259 831.724C321.527 831.946 321.868 832.06 322.215 832.043C322.562 832.027 322.89 831.882 323.136 831.637L326.629 828.144C327.753 828.782 328.92 829.332 330.515 830.109V834.868C330.515 835.238 330.662 835.594 330.924 835.856C331.186 836.117 331.541 836.265 331.912 836.265H337.5H343.088C343.459 836.265 343.814 836.117 344.076 835.856C344.338 835.594 344.485 835.238 344.485 834.868V830.109C346.08 829.332 347.247 828.782 348.371 828.144L351.864 831.637C352.11 831.882 352.438 832.027 352.785 832.043C353.132 832.06 353.473 831.946 353.741 831.724L362.123 824.739C362.273 824.617 362.397 824.466 362.486 824.294C362.574 824.123 362.626 823.935 362.639 823.742C362.651 823.549 362.623 823.356 362.557 823.174C362.491 822.993 362.388 822.827 362.254 822.687L357.408 817.841C358.141 816.663 358.841 815.376 359.373 813.912H365.441C365.812 813.912 366.167 813.765 366.429 813.503C366.691 813.241 366.838 812.885 366.838 812.515V806.926V801.338C366.838 800.968 366.691 800.612 366.429 800.35C366.167 800.088 365.812 799.941 365.441 799.941H359.373C358.841 798.459 358.147 797.157 357.408 795.968L362.254 791.122C362.388 790.983 362.491 790.817 362.557 790.635C362.623 790.454 362.651 790.26 362.639 790.068C362.626 789.875 362.574 789.687 362.486 789.515C362.397 789.343 362.273 789.192 362.123 789.07L353.741 782.085C353.473 781.864 353.132 781.75 352.785 781.766C352.438 781.782 352.11 781.927 351.864 782.172L348.371 785.665C347.247 785.027 346.08 784.477 344.485 783.7V778.985C344.485 778.615 344.338 778.259 344.076 777.997C343.814 777.736 343.459 777.588 343.088 777.588H337.5H331.912C331.825 777.58 331.737 777.58 331.65 777.588ZM333.309 780.382H337.5H341.691V784.574C341.693 784.825 341.763 785.072 341.894 785.287C342.025 785.502 342.211 785.678 342.433 785.796C345.306 787.319 346.577 787.574 347.891 788.503C348.162 788.689 348.49 788.774 348.817 788.742C349.145 788.71 349.451 788.563 349.681 788.328L352.955 785.054L359.198 790.205L354.658 794.746C354.444 794.97 354.311 795.259 354.279 795.567C354.247 795.876 354.319 796.186 354.483 796.449C355.622 798.343 356.647 799.813 357.102 801.644C357.172 801.952 357.343 802.228 357.589 802.426C357.835 802.624 358.14 802.733 358.456 802.735H364.044V806.926V811.118H358.456C358.146 811.118 357.845 811.22 357.6 811.41C357.355 811.6 357.18 811.865 357.102 812.165C356.647 813.996 355.622 815.467 354.483 817.361C354.319 817.624 354.247 817.934 354.279 818.242C354.311 818.55 354.444 818.839 354.658 819.063L359.198 823.604L352.955 828.756L349.681 825.481C349.451 825.246 349.145 825.1 348.817 825.068C348.49 825.036 348.162 825.12 347.891 825.307C346.577 826.235 345.306 826.491 342.433 828.013C342.204 828.135 342.014 828.318 341.883 828.541C341.752 828.765 341.685 829.02 341.691 829.279V833.471H337.5H333.309V829.279C333.315 829.02 333.248 828.765 333.117 828.541C332.986 828.318 332.796 828.135 332.567 828.013C329.694 826.491 328.423 826.235 327.109 825.307C326.838 825.12 326.51 825.036 326.183 825.068C325.855 825.1 325.549 825.246 325.319 825.481L322.045 828.756L315.802 823.604L320.342 819.063C320.556 818.839 320.689 818.55 320.721 818.242C320.753 817.934 320.681 817.624 320.517 817.361C319.378 815.467 318.353 813.996 317.898 812.165C317.82 811.865 317.645 811.6 317.4 811.41C317.155 811.22 316.854 811.118 316.544 811.118H310.956V806.926V802.735H316.544C316.86 802.733 317.165 802.624 317.411 802.426C317.657 802.228 317.828 801.952 317.898 801.644C318.353 799.813 319.378 798.342 320.517 796.449C320.681 796.186 320.753 795.876 320.721 795.567C320.689 795.259 320.556 794.97 320.342 794.746L315.802 790.205L322.045 785.054L325.319 788.328C325.549 788.563 325.855 788.71 326.183 788.742C326.51 788.774 326.838 788.689 327.109 788.503C328.423 787.574 329.694 787.319 332.567 785.796C332.789 785.678 332.975 785.502 333.106 785.287C333.237 785.072 333.307 784.825 333.309 784.574V780.382ZM337.5 794.353C330.572 794.353 324.926 799.999 324.926 806.926C324.926 813.854 330.572 819.5 337.5 819.5C344.428 819.5 350.074 813.854 350.074 806.926C350.074 799.999 344.428 794.353 337.5 794.353ZM337.5 797.147C342.918 797.147 347.279 801.509 347.279 806.926C347.279 812.344 342.918 816.706 337.5 816.706C332.082 816.706 327.721 812.344 327.721 806.926C327.721 801.509 332.082 797.147 337.5 797.147ZM305.106 847.441C304.735 847.476 304.394 847.656 304.156 847.943C303.919 848.23 303.805 848.599 303.84 848.969C303.874 849.34 304.055 849.681 304.341 849.919C304.628 850.156 304.997 850.27 305.368 850.235H369.632C369.817 850.238 370.001 850.204 370.173 850.135C370.345 850.066 370.501 849.963 370.633 849.833C370.765 849.703 370.87 849.548 370.941 849.378C371.013 849.207 371.049 849.023 371.049 848.838C371.049 848.653 371.013 848.47 370.941 848.299C370.87 848.128 370.765 847.973 370.633 847.843C370.501 847.713 370.345 847.611 370.173 847.542C370.001 847.473 369.817 847.439 369.632 847.441H305.368C305.281 847.433 305.193 847.433 305.106 847.441Z" fill="#4CB0EE" stroke="#4CB0EE" strokeWidth="10" mask="url(#path-17-inside-1)"/>
    <Mask id="path-18-inside-2" fill="white">
    <Path d="M988.779 228C983.386 228 979 232.386 979 237.779V338.368C979 343.761 983.386 348.147 988.779 348.147H1064.22C1069.61 348.147 1074 343.761 1074 338.368V237.779C1074 232.386 1069.61 228 1064.22 228H988.779ZM988.779 230.794H1064.22C1068.11 230.794 1071.21 233.886 1071.21 237.779V338.368C1071.21 342.262 1068.11 345.353 1064.22 345.353H988.779C984.886 345.353 981.794 342.262 981.794 338.368V237.779C981.794 233.886 984.886 230.794 988.779 230.794ZM1020.65 258.735C1020.33 258.797 1020.03 258.971 1019.83 259.227C1019.62 259.482 1019.51 259.803 1019.51 260.132V264.847C1017.92 265.624 1016.75 266.174 1015.63 266.812L1012.14 263.319C1011.89 263.074 1011.56 262.929 1011.21 262.913C1010.87 262.897 1010.53 263.011 1010.26 263.232L1001.88 270.217C1001.73 270.339 1001.6 270.49 1001.51 270.662C1001.43 270.834 1001.37 271.022 1001.36 271.215C1001.35 271.407 1001.38 271.601 1001.44 271.782C1001.51 271.964 1001.61 272.13 1001.75 272.269L1006.59 277.115C1005.85 278.304 1005.16 279.606 1004.63 281.088H998.559C998.188 281.088 997.833 281.235 997.571 281.497C997.309 281.759 997.162 282.115 997.162 282.485V288.074V293.662C997.162 294.032 997.309 294.388 997.571 294.65C997.833 294.912 998.188 295.059 998.559 295.059H1004.63C1005.16 296.523 1005.86 297.81 1006.59 298.988L1001.75 303.834C1001.61 303.974 1001.51 304.14 1001.44 304.321C1001.38 304.503 1001.35 304.696 1001.36 304.889C1001.37 305.082 1001.43 305.27 1001.51 305.441C1001.6 305.613 1001.73 305.764 1001.88 305.886L1010.26 312.871C1010.53 313.093 1010.87 313.207 1011.21 313.19C1011.56 313.174 1011.89 313.029 1012.14 312.784L1015.63 309.291C1016.75 309.929 1017.92 310.479 1019.51 311.256V316.015C1019.51 316.385 1019.66 316.741 1019.92 317.003C1020.19 317.265 1020.54 317.412 1020.91 317.412H1026.5H1032.09C1032.46 317.412 1032.81 317.265 1033.08 317.003C1033.34 316.741 1033.49 316.385 1033.49 316.015V311.256C1035.08 310.479 1036.25 309.929 1037.37 309.291L1040.86 312.784C1041.11 313.029 1041.44 313.174 1041.79 313.19C1042.13 313.207 1042.47 313.093 1042.74 312.871L1051.12 305.886C1051.27 305.764 1051.4 305.613 1051.49 305.441C1051.57 305.27 1051.63 305.082 1051.64 304.889C1051.65 304.696 1051.62 304.503 1051.56 304.321C1051.49 304.14 1051.39 303.974 1051.25 303.834L1046.41 298.988C1047.14 297.81 1047.84 296.523 1048.37 295.059H1054.44C1054.81 295.059 1055.17 294.912 1055.43 294.65C1055.69 294.388 1055.84 294.032 1055.84 293.662V288.074V282.485C1055.84 282.115 1055.69 281.759 1055.43 281.497C1055.17 281.235 1054.81 281.088 1054.44 281.088H1048.37C1047.84 279.606 1047.15 278.304 1046.41 277.115L1051.25 272.269C1051.39 272.13 1051.49 271.964 1051.56 271.782C1051.62 271.601 1051.65 271.407 1051.64 271.215C1051.63 271.022 1051.57 270.834 1051.49 270.662C1051.4 270.49 1051.27 270.339 1051.12 270.217L1042.74 263.232C1042.47 263.011 1042.13 262.897 1041.79 262.913C1041.44 262.929 1041.11 263.074 1040.86 263.319L1037.37 266.812C1036.25 266.174 1035.08 265.624 1033.49 264.847V260.132C1033.49 259.762 1033.34 259.407 1033.08 259.145C1032.81 258.883 1032.46 258.735 1032.09 258.735H1026.5H1020.91C1020.82 258.727 1020.74 258.727 1020.65 258.735ZM1022.31 261.529H1026.5H1030.69V265.721C1030.69 265.972 1030.76 266.219 1030.89 266.434C1031.02 266.649 1031.21 266.825 1031.43 266.943C1034.31 268.466 1035.58 268.721 1036.89 269.65C1037.16 269.836 1037.49 269.921 1037.82 269.889C1038.14 269.857 1038.45 269.71 1038.68 269.475L1041.95 266.201L1048.2 271.352L1043.66 275.893C1043.44 276.117 1043.31 276.406 1043.28 276.714C1043.25 277.023 1043.32 277.333 1043.48 277.596C1044.62 279.49 1045.65 280.96 1046.1 282.791C1046.17 283.099 1046.34 283.375 1046.59 283.573C1046.83 283.771 1047.14 283.88 1047.46 283.882H1053.04V288.074V292.265H1047.46C1047.15 292.265 1046.84 292.367 1046.6 292.557C1046.35 292.747 1046.18 293.013 1046.1 293.312C1045.65 295.143 1044.62 296.614 1043.48 298.508C1043.32 298.771 1043.25 299.081 1043.28 299.389C1043.31 299.697 1043.44 299.986 1043.66 300.21L1048.2 304.751L1041.95 309.903L1038.68 306.628C1038.45 306.393 1038.14 306.247 1037.82 306.215C1037.49 306.183 1037.16 306.267 1036.89 306.454C1035.58 307.382 1034.31 307.638 1031.43 309.16C1031.2 309.282 1031.01 309.465 1030.88 309.688C1030.75 309.912 1030.69 310.167 1030.69 310.426V314.618H1026.5H1022.31V310.426C1022.31 310.167 1022.25 309.912 1022.12 309.688C1021.99 309.465 1021.8 309.282 1021.57 309.16C1018.69 307.638 1017.42 307.382 1016.11 306.454C1015.84 306.267 1015.51 306.183 1015.18 306.215C1014.86 306.247 1014.55 306.393 1014.32 306.628L1011.05 309.903L1004.8 304.751L1009.34 300.21C1009.56 299.986 1009.69 299.697 1009.72 299.389C1009.75 299.081 1009.68 298.771 1009.52 298.508C1008.38 296.614 1007.35 295.143 1006.9 293.312C1006.82 293.013 1006.65 292.747 1006.4 292.557C1006.16 292.367 1005.85 292.265 1005.54 292.265H999.956V288.074V283.882H1005.54C1005.86 283.88 1006.17 283.771 1006.41 283.573C1006.66 283.375 1006.83 283.099 1006.9 282.791C1007.35 280.96 1008.38 279.49 1009.52 277.596C1009.68 277.333 1009.75 277.023 1009.72 276.714C1009.69 276.406 1009.56 276.117 1009.34 275.893L1004.8 271.352L1011.05 266.201L1014.32 269.475C1014.55 269.71 1014.86 269.857 1015.18 269.889C1015.51 269.921 1015.84 269.836 1016.11 269.65C1017.42 268.721 1018.69 268.466 1021.57 266.943C1021.79 266.825 1021.98 266.649 1022.11 266.434C1022.24 266.219 1022.31 265.972 1022.31 265.721V261.529ZM1026.5 275.5C1019.57 275.5 1013.93 281.146 1013.93 288.074C1013.93 295.001 1019.57 300.647 1026.5 300.647C1033.43 300.647 1039.07 295.001 1039.07 288.074C1039.07 281.146 1033.43 275.5 1026.5 275.5ZM1026.5 278.294C1031.92 278.294 1036.28 282.656 1036.28 288.074C1036.28 293.491 1031.92 297.853 1026.5 297.853C1021.08 297.853 1016.72 293.491 1016.72 288.074C1016.72 282.656 1021.08 278.294 1026.5 278.294Z"/>
    </Mask>
    <Path d="M988.779 228C983.386 228 979 232.386 979 237.779V338.368C979 343.761 983.386 348.147 988.779 348.147H1064.22C1069.61 348.147 1074 343.761 1074 338.368V237.779C1074 232.386 1069.61 228 1064.22 228H988.779ZM988.779 230.794H1064.22C1068.11 230.794 1071.21 233.886 1071.21 237.779V338.368C1071.21 342.262 1068.11 345.353 1064.22 345.353H988.779C984.886 345.353 981.794 342.262 981.794 338.368V237.779C981.794 233.886 984.886 230.794 988.779 230.794ZM1020.65 258.735C1020.33 258.797 1020.03 258.971 1019.83 259.227C1019.62 259.482 1019.51 259.803 1019.51 260.132V264.847C1017.92 265.624 1016.75 266.174 1015.63 266.812L1012.14 263.319C1011.89 263.074 1011.56 262.929 1011.21 262.913C1010.87 262.897 1010.53 263.011 1010.26 263.232L1001.88 270.217C1001.73 270.339 1001.6 270.49 1001.51 270.662C1001.43 270.834 1001.37 271.022 1001.36 271.215C1001.35 271.407 1001.38 271.601 1001.44 271.782C1001.51 271.964 1001.61 272.13 1001.75 272.269L1006.59 277.115C1005.85 278.304 1005.16 279.606 1004.63 281.088H998.559C998.188 281.088 997.833 281.235 997.571 281.497C997.309 281.759 997.162 282.115 997.162 282.485V288.074V293.662C997.162 294.032 997.309 294.388 997.571 294.65C997.833 294.912 998.188 295.059 998.559 295.059H1004.63C1005.16 296.523 1005.86 297.81 1006.59 298.988L1001.75 303.834C1001.61 303.974 1001.51 304.14 1001.44 304.321C1001.38 304.503 1001.35 304.696 1001.36 304.889C1001.37 305.082 1001.43 305.27 1001.51 305.441C1001.6 305.613 1001.73 305.764 1001.88 305.886L1010.26 312.871C1010.53 313.093 1010.87 313.207 1011.21 313.19C1011.56 313.174 1011.89 313.029 1012.14 312.784L1015.63 309.291C1016.75 309.929 1017.92 310.479 1019.51 311.256V316.015C1019.51 316.385 1019.66 316.741 1019.92 317.003C1020.19 317.265 1020.54 317.412 1020.91 317.412H1026.5H1032.09C1032.46 317.412 1032.81 317.265 1033.08 317.003C1033.34 316.741 1033.49 316.385 1033.49 316.015V311.256C1035.08 310.479 1036.25 309.929 1037.37 309.291L1040.86 312.784C1041.11 313.029 1041.44 313.174 1041.79 313.19C1042.13 313.207 1042.47 313.093 1042.74 312.871L1051.12 305.886C1051.27 305.764 1051.4 305.613 1051.49 305.441C1051.57 305.27 1051.63 305.082 1051.64 304.889C1051.65 304.696 1051.62 304.503 1051.56 304.321C1051.49 304.14 1051.39 303.974 1051.25 303.834L1046.41 298.988C1047.14 297.81 1047.84 296.523 1048.37 295.059H1054.44C1054.81 295.059 1055.17 294.912 1055.43 294.65C1055.69 294.388 1055.84 294.032 1055.84 293.662V288.074V282.485C1055.84 282.115 1055.69 281.759 1055.43 281.497C1055.17 281.235 1054.81 281.088 1054.44 281.088H1048.37C1047.84 279.606 1047.15 278.304 1046.41 277.115L1051.25 272.269C1051.39 272.13 1051.49 271.964 1051.56 271.782C1051.62 271.601 1051.65 271.407 1051.64 271.215C1051.63 271.022 1051.57 270.834 1051.49 270.662C1051.4 270.49 1051.27 270.339 1051.12 270.217L1042.74 263.232C1042.47 263.011 1042.13 262.897 1041.79 262.913C1041.44 262.929 1041.11 263.074 1040.86 263.319L1037.37 266.812C1036.25 266.174 1035.08 265.624 1033.49 264.847V260.132C1033.49 259.762 1033.34 259.407 1033.08 259.145C1032.81 258.883 1032.46 258.735 1032.09 258.735H1026.5H1020.91C1020.82 258.727 1020.74 258.727 1020.65 258.735ZM1022.31 261.529H1026.5H1030.69V265.721C1030.69 265.972 1030.76 266.219 1030.89 266.434C1031.02 266.649 1031.21 266.825 1031.43 266.943C1034.31 268.466 1035.58 268.721 1036.89 269.65C1037.16 269.836 1037.49 269.921 1037.82 269.889C1038.14 269.857 1038.45 269.71 1038.68 269.475L1041.95 266.201L1048.2 271.352L1043.66 275.893C1043.44 276.117 1043.31 276.406 1043.28 276.714C1043.25 277.023 1043.32 277.333 1043.48 277.596C1044.62 279.49 1045.65 280.96 1046.1 282.791C1046.17 283.099 1046.34 283.375 1046.59 283.573C1046.83 283.771 1047.14 283.88 1047.46 283.882H1053.04V288.074V292.265H1047.46C1047.15 292.265 1046.84 292.367 1046.6 292.557C1046.35 292.747 1046.18 293.013 1046.1 293.312C1045.65 295.143 1044.62 296.614 1043.48 298.508C1043.32 298.771 1043.25 299.081 1043.28 299.389C1043.31 299.697 1043.44 299.986 1043.66 300.21L1048.2 304.751L1041.95 309.903L1038.68 306.628C1038.45 306.393 1038.14 306.247 1037.82 306.215C1037.49 306.183 1037.16 306.267 1036.89 306.454C1035.58 307.382 1034.31 307.638 1031.43 309.16C1031.2 309.282 1031.01 309.465 1030.88 309.688C1030.75 309.912 1030.69 310.167 1030.69 310.426V314.618H1026.5H1022.31V310.426C1022.31 310.167 1022.25 309.912 1022.12 309.688C1021.99 309.465 1021.8 309.282 1021.57 309.16C1018.69 307.638 1017.42 307.382 1016.11 306.454C1015.84 306.267 1015.51 306.183 1015.18 306.215C1014.86 306.247 1014.55 306.393 1014.32 306.628L1011.05 309.903L1004.8 304.751L1009.34 300.21C1009.56 299.986 1009.69 299.697 1009.72 299.389C1009.75 299.081 1009.68 298.771 1009.52 298.508C1008.38 296.614 1007.35 295.143 1006.9 293.312C1006.82 293.013 1006.65 292.747 1006.4 292.557C1006.16 292.367 1005.85 292.265 1005.54 292.265H999.956V288.074V283.882H1005.54C1005.86 283.88 1006.17 283.771 1006.41 283.573C1006.66 283.375 1006.83 283.099 1006.9 282.791C1007.35 280.96 1008.38 279.49 1009.52 277.596C1009.68 277.333 1009.75 277.023 1009.72 276.714C1009.69 276.406 1009.56 276.117 1009.34 275.893L1004.8 271.352L1011.05 266.201L1014.32 269.475C1014.55 269.71 1014.86 269.857 1015.18 269.889C1015.51 269.921 1015.84 269.836 1016.11 269.65C1017.42 268.721 1018.69 268.466 1021.57 266.943C1021.79 266.825 1021.98 266.649 1022.11 266.434C1022.24 266.219 1022.31 265.972 1022.31 265.721V261.529ZM1026.5 275.5C1019.57 275.5 1013.93 281.146 1013.93 288.074C1013.93 295.001 1019.57 300.647 1026.5 300.647C1033.43 300.647 1039.07 295.001 1039.07 288.074C1039.07 281.146 1033.43 275.5 1026.5 275.5ZM1026.5 278.294C1031.92 278.294 1036.28 282.656 1036.28 288.074C1036.28 293.491 1031.92 297.853 1026.5 297.853C1021.08 297.853 1016.72 293.491 1016.72 288.074C1016.72 282.656 1021.08 278.294 1026.5 278.294Z" fill="#4CB0EE" stroke="#4CB0EE" strokeWidth="10" mask="url(#path-18-inside-2)"/>
    </Svg>
)

export default Services