import Link from "next/link";
import Image from "next/image";
export default function ({ href, title, desc, gradient }) {
  const customStyle ={
          background: `
      linear-gradient(0deg, rgba(39, 40, 41, 0.7), rgba(39, 40, 41, 0.7)),
      linear-gradient(119.3deg, rgba(0, 0, 0, 0) 23.34%, rgba(255, 60, 0, 0.3) 96.36%)
    `,
        } ;
  
  return (
    <Link href="">
      <div
        style={gradient? customStyle : undefined}
        className={` ${gradient? '': 'ring-2 ring-[#FF541F]/20 ring-inset'}  p-4 h-[200px] bg-[#272829B2] flex flex-col justify-between rounded-xl `}
      >
        <div className="flex  gap-4 justify-between h-full">
          <p className="text-xs md:text-sm  max-w-xl">
          {desc}
          </p>

          <div className="bg-[#FF541F] min-w-[50px]  h-[50px] flex items-center justify-center rounded-full">
            <Image src="/images/Image.png" alt="arrow" width={30} height={30} />
          </div>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl mb-4">{title}</p>
      </div>
    </Link>
  );
}
