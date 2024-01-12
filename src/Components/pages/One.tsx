import { ClashGrotesk } from "@/utils/font";

export const One = () => {
  return (
    <section
      className={`${ClashGrotesk.variable} first-section flex h-screen flex-col items-center justify-center gap-10 text-center md:gap-5 `}
    >
      <p
        className={`font-clashgrotesk text-[95px] font-semibold leading-[86px] text-base-vilolet md:text-[105px] md:leading-[130px]`}
      >
        Mint. Claim. Trade.
      </p>

      <ul className="list-inside list-none space-y-1 text-center">
        <li
          className={`list-none font-clashgrotesk text-lg font-semibold leading-8 text-white md:text-2xl`}
        >
          🔥 PAAL Xclusive NFT Mint Event:
        </li>
        <li
          className={`list-none font-clashgrotesk text-lg font-light leading-8 text-white md:text-2xl`}
        >
          💰 Access Fee-Free Trading on PaalX v0.1
        </li>
        <li
          className={`font-clashgrotesk text-lg font-light leading-8 text-white md:text-2xl`}
        >
          💵 Earn passive ETH from NFT trading volume fees.
        </li>
        <li
          className={`font-clashgrotesk text-lg font-light leading-8 text-white md:text-2xl`}
        >
          🗝️ Access to exclusive features in PaalX
        </li>
      </ul>

      <p
        className={`font-clashgrotesk text-3xl font-medium text-base-vilolet underline md:text-7xl `}
      >
        500 of 1000 minted
      </p>
      <div className="mt-5  flex justify-center gap-4 md:gap-7">
        <button
          className={`h-12 w-[150px] rounded-lg border border-base-vilolet bg-transparent font-clashgrotesk font-medium text-white  `}
        >
          How it works?
        </button>
        <button
          className={`h-12 w-[150px] rounded-lg bg-base-violet-light font-clashgrotesk font-medium text-white  `}
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};
