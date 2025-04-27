export default function TopWave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 w-full h-[100px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#dbeafe  " />
        <stop offset="100%" stopColor="#93c5fd  " />
      </linearGradient>
      <path
        fill="url(#waveGradient)"
        fill-opacity="1"
        d="M0,192L26.7,192C53.3,192,107,192,160,181.3C213.3,171,267,149,320,133.3C373.3,117,427,107,480,122.7C533.3,139,587,181,640,186.7C693.3,192,747,160,800,144C853.3,128,907,128,960,133.3C1013.3,139,1067,149,1120,170.7C1173.3,192,1227,224,1280,234.7C1333.3,245,1387,235,1413,229.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
      ></path>
    </svg>
  );
}
