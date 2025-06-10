import Image from "next/image";
import bg from "../../public/bg.png";

export default function Home() {
  return (
    <div className="relative min-w-screen min-h-screen">
      <Image src={bg} alt="BackGround" fill style={{ objectFit: "cover" }} priority />

      <div className="absolute inset-0 bg-indigo-950/20 z-20" />

      <div className="z-30 relative">
        <h3>cosaaasss</h3>
      </div>
    </div>
  );
}
