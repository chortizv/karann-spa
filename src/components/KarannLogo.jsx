/**
 * KarannLogo — SVG replica of the KARANN brand icon.
 * Colors match the official logo:
 *   dark navy  #0d2b6e
 *   mid blue   #1a5ab8
 *   sky blue   #4db8ef
 *   red accent #e8251a
 */
const KarannLogo = ({ size = 40, showText = false, textColor = "#ffffff" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={showText ? size * 1.35 : size}
        viewBox="0 0 100 135"
        aria-label="Karann Logo"
    >
        <defs>
            <clipPath id="circle-clip">
                <circle cx="50" cy="52" r="44" />
            </clipPath>
        </defs>

        {/* ── outer circle background (dark navy) ── */}
        <circle cx="50" cy="52" r="44" fill="#0d2b6e" />

        {/* ── sky-blue right wave ── */}
        <path
            d="M50,8 C72,8 90,24 93,45 C80,38 65,36 50,44 C35,52 22,58 10,52 C14,27 30,8 50,8 Z"
            fill="#4db8ef"
            clipPath="url(#circle-clip)"
        />

        {/* ── mid blue left lower wave ── */}
        <path
            d="M7,55 C10,70 20,83 34,90 C48,97 63,95 75,86 C62,82 52,72 50,60 C48,48 50,36 58,28 C45,22 28,22 17,35 C10,42 7,49 7,55 Z"
            fill="#1a5ab8"
            clipPath="url(#circle-clip)"
        />

        {/* ── white separator curve ── */}
        <path
            d="M50,8 C38,20 36,38 42,52 C48,66 50,80 42,92"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            clipPath="url(#circle-clip)"
        />

        {/* ── red accent stripe ── */}
        <path
            d="M50,8 C60,14 72,22 82,34 C88,41 92,48 93,55 C88,46 78,38 67,33 C56,28 50,20 50,8 Z"
            fill="#e8251a"
            clipPath="url(#circle-clip)"
        />

        {/* ── white dot (person head) ── */}
        <circle cx="67" cy="18" r="6" fill="#0d2b6e" />
        <circle cx="67" cy="18" r="4.5" fill="#4db8ef" />

        {/* ── optional brand name text ── */}
        {showText && (
            <text
                x="50"
                y="124"
                textAnchor="middle"
                fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                fontWeight="800"
                fontSize="22"
                letterSpacing="4"
                fill={textColor}
            >
                KARANN
            </text>
        )}
    </svg>
);

export default KarannLogo;
