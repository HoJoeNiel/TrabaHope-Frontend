export default function BottomWave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-full h-[100px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6096b4" />
          <stop offset="100%" stopColor="#93bfcf" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        fill-opacity="1"
        d="M0,192L26.7,192C53.3,192,107,192,160,181.3C213.3,171,267,149,320,133.3C373.3,117,427,107,480,122.7C533.3,139,587,181,640,186.7C693.3,192,747,160,800,144C853.3,128,907,128,960,133.3C1013.3,139,1067,149,1120,170.7C1173.3,192,1227,224,1280,234.7C1333.3,245,1387,235,1413,229.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
      ></path>
    </svg>
  );
}
