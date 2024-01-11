import { ClashGrotesk } from "@/utils/font";

export const One = () => {
  return (
    <section
      className={`${ClashGrotesk.variable} h-screen flex flex-col justify-center items-center text-center md:gap-5 gap-10 first-section `}
    >
      <p
        className={`text-base-vilolet font-clashgrotesk font-semibold text-[105px] md:leading-[130px] leading-[86px]`}
      >
        Mint. Claim. Trade.
      </p>

      <div className="flex flex-col gap-4">
        <p
          className={`text-white font-clashgrotesk font-semibold text-lg md:text-2xl leading-8`}
        >
          PAAL Xclusive NFT Mint Event:
        </p>
        <p
          className={`text-white font-clashgrotesk font-light text-lg md:text-2xl leading-8`}
        >
          Access Fee-Free Trading on PaalX v0.1
        </p>
        <p
          className={`text-white font-clashgrotesk font-light text-lg md:text-2xl leading-8`}
        >
          Earn passive ETH from NFT trading volume fees.
        </p>
        <p
          className={`text-white font-clashgrotesk font-light text-lg md:text-2xl leading-8`}
        >
          Access to exclusive features in PaalX
        </p>
      </div>

      <p
        className={`text-base-vilolet font-clashgrotesk font-medium text-3xl md:text-7xl underline `}
      >
        500 of 1000 minted
      </p>
      <div className="flex  justify-center gap-4 md:gap-7 mt-5">
        <button
          className={`w-[150px] h-12 text-white rounded-lg bg-transparent border border-base-vilolet font-clashgrotesk font-medium  `}
        >
          How it works?
        </button>
        <button
          className={`w-[150px] h-12 text-white rounded-lg bg-base-violet-light font-clashgrotesk font-medium  `}
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};
