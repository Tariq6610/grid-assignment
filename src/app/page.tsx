
export default function Home() {
  return (
   <>
   <div className="grid grid-cols-6 grid-rows-6 gap-3 grid-flow-row font-bold text-lg">
      <div className="min-h-[140px] p-9 bg-yellow-400 row-span-6">Nav</div>
      <div className="min-h-[140px] p-9 bg-yellow-400 col-span-5">Header</div>
      <div className="min-h-[140px] p-9 bg-yellow-400 row-span-4 col-span-4">Article</div>
      <div className="min-h-[140px] p-9 bg-yellow-400 row-span-5">Ads</div>
      <div className="min-h-[140px] p-9 bg-yellow-400 col-span-4">Footer</div>
   </div>
   </>
  );
}
