<<<<<<< HEAD
import MainHome from '@/app/components/MainHome';

const page = () => {
  return <MainHome />;
=======
const page = () => {
  return (
    <h2>home page</h2>
    // <div className="h-[5282.75px] relative">
    //   <div className="h-[343.19px] px-[120px] pt-[115px] left-0 top-[1000px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[228.19px] flex-col justify-start items-start flex">
    //       <div className="self-stretch justify-start items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#dcffd2] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-[70px] h-20 relative"
    //               src="https://via.placeholder.com/70x80"
    //             />
    //             <div className="self-stretch h-[31px] pl-[32.84px] pr-[32.85px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Hare care
    //               </div>
    //             </div>
    //             <div className="w-[33px] pr-[5px] py-[22px] left-[150px] top-[40.59px] absolute origin-top-left rotate-180 bg-[#ff6565] rounded-[50px] justify-center items-start inline-flex">
    //               <div className="origin-top-left rotate-90 text-center text-white text-base font-normal font-['Inter'] leading-7">
    //                 new
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#ffedb4] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-20 h-20 relative"
    //               src="https://via.placeholder.com/80x80"
    //             />
    //             <div className="self-stretch h-[31px] pl-[34.52px] pr-[34.51px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Skin care
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#dfe4ff] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-20 h-20 relative"
    //               src="https://via.placeholder.com/80x80"
    //             />
    //             <div className="self-stretch h-[31px] pl-[38.23px] pr-[38.25px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Lip stick
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#ffeacc] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-20 h-20 relative"
    //               src="https://via.placeholder.com/80x80"
    //             />
    //             <div className="self-stretch h-[31px] pl-[33.84px] pr-[33.86px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Face skin
    //               </div>
    //             </div>
    //             <div className="w-[33px] pr-[5px] py-[22px] left-[150px] top-[39.64px] absolute origin-top-left rotate-180 bg-[#835bf4] rounded-[50px] justify-center items-start inline-flex">
    //               <div className="origin-top-left rotate-90 text-center text-white text-base font-normal font-['Inter'] leading-7">
    //                 sale
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#ffdae0] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-20 h-20 relative"
    //               src="https://via.placeholder.com/80x80"
    //             />
    //             <div className="self-stretch h-[31px] px-[41px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Blusher
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch grow shrink basis-0 px-[15px] pt-[45px] pb-[30px] bg-[#fff3da] rounded-[10px] flex-col justify-start items-center gap-[43px] flex">
    //             <img
    //               className="w-20 h-20 relative"
    //               src="https://via.placeholder.com/80x80"
    //             />
    //             <div className="self-stretch h-[31px] px-[42.25px] pt-[11px] flex-col justify-start items-center flex">
    //               <div className="w-[25px] h-px left-[57.50px] top-0 absolute bg-[#ff6565]" />
    //               <div className="text-center text-[#1d4a21] text-base font-medium font-['Inter'] leading-tight">
    //                 Natural
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[1609.38px] px-[120px] pt-[115px] pb-[65px] left-0 top-[1343.19px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[1429.38px] flex-col justify-start items-start flex">
    //       <div className="self-stretch justify-center items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[118px] flex-col justify-start items-center gap-[13px] flex">
    //             <div className="self-stretch h-[49px] pl-[482.77px] pr-[482.78px] pb-2.5 flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px]">
    //                 Top sale
    //               </div>
    //             </div>
    //             <div className="h-14 pl-[8.47px] pr-[8.48px] flex-col justify-start items-center flex">
    //               <div className="text-center text-[#364958] text-base font-normal font-['Inter'] leading-7">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 <br />
    //                 ut aliquam, purus sit amet luctus venenatis
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="h-[1251.38px] relative">
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-0 top-0 absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Readable content DX22
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-[400px] top-0 absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Modern Eye Brush
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-[800px] top-0 absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Voyage face cleaner
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-0 top-[625.69px] absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Impulse Duffle
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.93px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-[400px] top-[625.69px] absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Sprite Yoga Straps1
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.93px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[400px] h-[625.69px] pb-[45px] left-[800px] top-[625.69px] absolute flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Fusion facial cream
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.93px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[370px] px-[120px] left-0 top-[2952.56px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[370px] flex-col justify-start items-start flex">
    //       <div className="self-stretch justify-start items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[370px] rounded-[10px] flex-col justify-center items-start flex">
    //             <img
    //               className="h-[370px] relative rounded-[10px]"
    //               src="https://via.placeholder.com/370x370"
    //             />
    //             <div className="w-20 h-[740px] left-[-60.54px] top-[-141.03px] absolute origin-top-left rotate-[35deg] bg-white/10" />
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[370px] rounded-[10px] flex-col justify-center items-start flex">
    //             <img
    //               className="h-[370px] relative rounded-[10px]"
    //               src="https://via.placeholder.com/370x370"
    //             />
    //             <div className="w-20 h-[740px] left-[-60.54px] top-[-141.03px] absolute origin-top-left rotate-[35deg] bg-white/10" />
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[370px] rounded-[10px] flex-col justify-center items-start flex">
    //             <img
    //               className="h-[370px] relative rounded-[10px]"
    //               src="https://via.placeholder.com/370x370"
    //             />
    //             <div className="w-20 h-[740px] left-[-60.54px] top-[-141.03px] absolute origin-top-left rotate-[35deg] bg-white/10" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[735.69px] px-[120px] pt-[115px] left-0 top-[3322.56px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[620.69px] flex-col justify-start items-start flex">
    //       <div className="self-stretch justify-center items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Readable content DX22
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Voyage face cleaner
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[580.69px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[501px] flex-col justify-start items-start flex">
    //               <div className="self-stretch h-[370.31px] rounded-[10px] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-[370.31px] flex-col justify-center items-start flex">
    //                   <img
    //                     className="w-[304.48px] h-[370.31px] relative rounded-[10px]"
    //                     src="https://via.placeholder.com/304x370"
    //                   />
    //                 </div>
    //                 <div className="h-[33px] px-[22px] pt-[7px] pb-2.5 left-[274.41px] top-[20px] absolute bg-[#ff6565] rounded-[50px] flex-col justify-start items-center flex">
    //                   <div className="text-center text-white text-base font-normal font-['Inter'] leading-none">
    //                     new
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="h-[130.69px] relative">
    //                 <div className="w-[370px] left-0 top-[14px] absolute justify-between items-center inline-flex">
    //                   <div className="justify-start items-start flex">
    //                     <div className="self-stretch flex-col justify-start items-start inline-flex">
    //                       <div className="justify-start items-start inline-flex">
    //                         <div className="w-[14.86px] h-4 relative" />
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="self-stretch pl-[5px] flex-col justify-center items-start inline-flex">
    //                       <div className="flex-col justify-start items-start flex">
    //                         <div className="justify-start items-start inline-flex">
    //                           <div className="w-[14.86px] h-4 relative" />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex-col justify-start items-start inline-flex">
    //                     <div className="text-[#898989] text-[13px] font-normal font-['Inter'] leading-snug">
    //                       150 reviews
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[26px] left-0 top-[56.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[21px] font-normal font-['Inter'] leading-relaxed">
    //                       Impulse Duffle
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] h-[36.75px] left-0 top-[93.94px] absolute">
    //                   <div className="w-[81.84px] h-[36.75px] left-0 top-[-0.88px] absolute text-[#364958] text-[21px] font-medium font-['Inter'] leading-9">
    //                     $210.00
    //                   </div>
    //                   <div className="w-10 h-[21px] left-[89.64px] top-[10px] absolute text-[#364958] text-xs font-light font-['Inter'] line-through leading-[21px]">
    //                     300.00
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[929.50px] px-[120px] pt-[115px] pb-[70px] left-0 top-[4008.25px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[744.50px] flex-col justify-start items-start flex">
    //       <div className="self-stretch justify-center items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch px-[15px] flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[157px] flex-col justify-start items-center gap-[13px] flex">
    //             <div className="self-stretch h-[88px] px-[460.08px] pb-2.5 flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px]">
    //                 Blog posts
    //               </div>
    //             </div>
    //             <div className="h-14 pl-[8.47px] pr-[8.48px] flex-col justify-start items-center flex">
    //               <div className="text-center text-[#364958] text-base font-normal font-['Inter'] leading-7">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 <br />
    //                 ut aliquam, purus sit amet luctus venenatis
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="self-stretch justify-center items-start inline-flex">
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[526.50px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[457.30px] flex-col justify-start items-start gap-[30px] flex">
    //               <div className="self-stretch h-[250.80px] rounded-[10px] flex-col justify-center items-start flex">
    //                 <img
    //                   className="w-[289.98px] h-[250.80px] relative rounded-[10px]"
    //                   src="https://via.placeholder.com/290x251"
    //                 />
    //               </div>
    //               <div className="h-[176.50px] relative">
    //                 <div className="px-[31px] py-[7px] left-0 top-0 absolute bg-[#ff9c9c] rounded-[50px] justify-start items-start inline-flex">
    //                   <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                     beauty
    //                   </div>
    //                 </div>
    //                 <div className="h-[74px] left-0 top-[64.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[28px] font-medium font-['Inter'] leading-[37px]">
    //                       Lorem ipsum dolor sit amet
    //                       <br />
    //                       consectetur adipiscing.
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] left-0 top-[153.38px] absolute justify-start items-start inline-flex">
    //                   <div className="self-stretch justify-start items-start flex">
    //                     <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                       By:{' '}
    //                     </div>
    //                     <div className="justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         Tomas De Momen
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="self-stretch pl-[52px] flex-col justify-center items-start inline-flex">
    //                     <div className="flex-col justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         February 13, 2022
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[526.50px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[457.30px] flex-col justify-start items-start gap-[30px] flex">
    //               <div className="self-stretch h-[250.80px] rounded-[10px] flex-col justify-center items-start flex">
    //                 <img
    //                   className="w-[289.98px] h-[250.80px] relative rounded-[10px]"
    //                   src="https://via.placeholder.com/290x251"
    //                 />
    //               </div>
    //               <div className="h-[176.50px] relative">
    //                 <div className="px-[31px] py-[7px] left-0 top-0 absolute bg-[#a49cff] rounded-[50px] justify-start items-start inline-flex">
    //                   <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                     beauty
    //                   </div>
    //                 </div>
    //                 <div className="h-[74px] left-0 top-[64.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[28px] font-medium font-['Inter'] leading-[37px]">
    //                       Facial Scrub is natural
    //                       <br />
    //                       treatment for face.
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] left-0 top-[153.38px] absolute justify-start items-start gap-[0px] inline-flex">
    //                   <div className="self-stretch justify-start items-start flex">
    //                     <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                       By:{' '}
    //                     </div>
    //                     <div className="justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         Tomas De Momen
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="self-stretch pl-[52px] flex-col justify-center items-start inline-flex">
    //                     <div className="flex-col justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         February 13, 2022
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
    //           <div className="self-stretch h-[526.50px] px-[15px] flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[457.30px] flex-col justify-start items-start gap-[30px] flex">
    //               <div className="self-stretch h-[250.80px] rounded-[10px] flex-col justify-center items-start flex">
    //                 <img
    //                   className="w-[289.98px] h-[250.80px] relative rounded-[10px]"
    //                   src="https://via.placeholder.com/290x251"
    //                 />
    //               </div>
    //               <div className="h-[176.50px] relative">
    //                 <div className="px-[31px] py-[7px] left-0 top-0 absolute bg-[#9cdbff] rounded-[50px] justify-start items-start inline-flex">
    //                   <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                     beauty
    //                   </div>
    //                 </div>
    //                 <div className="h-[74px] left-0 top-[64.75px] absolute flex-col justify-start items-start inline-flex">
    //                   <div className="justify-start items-start inline-flex">
    //                     <div className="text-[#231942] text-[28px] font-medium font-['Inter'] leading-[37px]">
    //                       Benefit of Hot Ston Spa for
    //                       <br />
    //                       your health & life.
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="w-[370px] left-0 top-[153.38px] absolute justify-start items-start gap-[0px] inline-flex">
    //                   <div className="self-stretch justify-start items-start flex">
    //                     <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                       By:{' '}
    //                     </div>
    //                     <div className="justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         Tomas De Momen
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="self-stretch pl-[52px] flex-col justify-center items-start inline-flex">
    //                     <div className="flex-col justify-start items-start flex">
    //                       <div className="text-[#6d6d6d] text-[13px] font-medium font-['Inter'] uppercase leading-snug">
    //                         February 13, 2022
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[345px] px-[120px] pb-[115px] left-0 top-[4937.75px] absolute flex-col justify-start items-center inline-flex">
    //     <div className="h-[230px] px-[15px] flex-col justify-start items-start flex">
    //       <div className="self-stretch h-[230px] pl-[100px] pr-[171px] py-[52px] rounded-[10px] justify-between items-center inline-flex">
    //         <div className="pt-2.5 flex-col justify-start items-start inline-flex">
    //           <div className="self-stretch h-[116px] flex-col justify-start items-start gap-[11px] flex">
    //             <div className="self-stretch h-[49px] pb-2.5 flex-col justify-start items-start flex">
    //               <div className="self-stretch text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px]">
    //                 Join with us
    //               </div>
    //             </div>
    //             <div className="h-14 flex-col justify-start items-start flex">
    //               <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
    //                 Lorem ipsum dolor sit amet, consectetur
    //                 <br />
    //                 adipiscing elit ut aliquam.
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="pt-3 flex-col justify-start items-start inline-flex">
    //           <div className="flex-col justify-start items-start flex">
    //             <div className="self-stretch h-[42px] p-px flex-col justify-start items-start flex">
    //               <div className="w-[398px] h-10 pl-3.5 pr-[58px] pt-[11px] pb-[13px] bg-white rounded-[10px] border border-[#dc7354] flex-col justify-start items-start flex">
    //                 <div className="self-stretch h-4 flex-col justify-start items-start flex">
    //                   <div className="self-stretch text-[#6c757d] text-[13px] font-normal font-['Inter']">
    //                     enter your email
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="w-[50px] h-[42px] pl-[17.48px] pr-[17.50px] pt-[13px] pb-3.5 left-[350px] top-0 absolute bg-[#ce4820] rounded-[10px] flex-col justify-start items-center flex">
    //               <div className="justify-start items-start inline-flex">
    //                 <div className="w-[15.02px] h-[15px] relative" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[5284px] left-0 top-0 absolute flex-col justify-start items-center inline-flex">
    //     <div className="w-[1440px] h-[5284px] flex-col justify-start items-start flex">
    //       <div className="self-stretch h-[1000px] justify-start items-start inline-flex">
    //         <div className="w-[1440px] h-[1000px] px-[120px] pt-[292.61px] pb-[292.62px] bg-neutral-50 justify-center items-center flex">
    //           <div className="w-[720px] h-[1000px] left-[720px] top-0 absolute bg-[#d9f1e1]" />
    //           <div className="left-[1240px] top-[22.50px] absolute flex-col justify-center items-start inline-flex">
    //             <img
    //               className="w-[70px] h-[955px] relative"
    //               src="https://via.placeholder.com/70x955"
    //             />
    //           </div>
    //           <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
    //             <div className="self-stretch justify-start items-center inline-flex">
    //               <div className="w-[770px] left-[430px] top-[-162px] absolute flex-col justify-center items-start inline-flex">
    //                 <img
    //                   className="w-[770px] h-[761.75px] relative"
    //                   src="https://via.placeholder.com/770x762"
    //                 />
    //               </div>
    //               <div className="w-[600px] px-[15px] flex-col justify-start items-start inline-flex">
    //                 <div className="self-stretch h-[415.93px] pt-[155.30px] flex-col justify-start items-start gap-[13.40px] flex">
    //                   <div className="h-[232px] left-[2px] top-[7px] absolute flex-col justify-center items-start flex">
    //                     <img
    //                       className="w-[427px] h-[232px] relative"
    //                       src="https://via.placeholder.com/427x232"
    //                     />
    //                   </div>
    //                   <div className="self-stretch h-[81.69px] pb-[0.69px] flex-col justify-start items-start flex">
    //                     <div className="self-stretch text-[#231942] text-[67px] font-bold font-['Inter'] uppercase leading-[80.40px]">
    //                       CLEAN FRESH
    //                     </div>
    //                   </div>
    //                   <div className="self-stretch h-[85.54px] pb-[0.55px] flex-col justify-start items-start flex">
    //                     <div className="self-stretch text-[#364958] text-[21px] font-normal font-['Inter'] leading-7">
    //                       Lorem ipsum dolor sit amet, consectetur
    //                       <br />
    //                       adipiscing elit ut aliquam, purus sit amet
    //                       <br />
    //                       luctus venenatis.
    //                     </div>
    //                   </div>
    //                   <div className="pl-[39px] pr-[27px] pt-[23.60px] pb-1.5 bg-white rounded-[50px] border-2 border-[#7a7a7a] justify-start items-center inline-flex">
    //                     <div className="text-center text-[#231942] text-sm font-normal font-['Inter'] uppercase leading-[37px] tracking-[7px]">
    //                       BUY NOW
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="w-[150px] h-px left-[1040px] top-[959px] absolute bg-white" />
    //         </div>
    //       </div>
    //       <div className="w-[200px] h-5 left-[30px] top-[5234px] absolute justify-start items-center inline-flex">
    //         <div className="w-[62.78px] h-0.5 pr-2.5 flex-col justify-start items-start inline-flex">
    //           <div className="w-[52.78px] h-0.5 bg-[#f3b7a2]" />
    //         </div>
    //         <div className="pr-2.5 flex-col justify-start items-start inline-flex">
    //           <div className="text-black text-[21px] font-light font-['Inter'] leading-[21px]">
    //             01
    //           </div>
    //         </div>
    //         <div className="text-black text-[21px] font-light font-['Inter'] leading-[21px]">
    //           /
    //         </div>
    //         <div className="pl-2.5 flex-col justify-start items-start inline-flex">
    //           <div className="text-black text-[21px] font-light font-['Inter'] leading-[21px]">
    //             02
    //           </div>
    //         </div>
    //         <div className="w-[62.78px] h-0.5 pl-2.5 flex-col justify-start items-start inline-flex">
    //           <div className="w-[52.78px] h-0.5 bg-[#f3b7a2]" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[162px] left-[1196px] top-[5224px] absolute justify-start items-start inline-flex">
    //       <div className="w-[54px] h-9 pr-[18px] flex-col justify-start items-start inline-flex">
    //         <div className="w-9 h-9 px-[10.14px] pt-[9px] pb-[5px] flex-col justify-start items-center flex">
    //           <div className="justify-start items-start inline-flex">
    //             <div className="w-[15.72px] h-[22px] relative" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[54px] h-9 pr-[18px] flex-col justify-start items-start inline-flex">
    //         <div className="w-9 h-9 px-[7.78px] pt-[9px] pb-[5px] flex-col justify-start items-center flex">
    //           <div className="justify-start items-start inline-flex">
    //             <div className="w-[20.44px] h-[22px] relative" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[54px] h-9 pr-[18px] flex-col justify-start items-start inline-flex">
    //         <div className="w-9 h-9 pl-[11.70px] pr-[11.72px] pt-[9px] pb-[5px] flex-col justify-start items-center flex">
    //           <div className="justify-start items-start inline-flex">
    //             <div className="w-[12.58px] h-[22px] relative" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
>>>>>>> origin/Chi
};

export default page;
