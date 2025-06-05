import { div, p } from "motion/react-client"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10">
      <p className="text-sm md:text-lg font-bold mt-10">
        "All scripture is given by inspiration of God, and is
        profitable for doctrine, for reproof, for correction, for instruction in
        righteousness."
      </p>
      <p className="text-slate-500 text-sm md:text-[16px] top-2 relative">2 Timothy 3:16 (KJV)</p>
    </div>
  );
}
