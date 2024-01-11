import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export const Two = () => {
  return (
    <section
      className={`second-section md:h-screen ${ClashGrotesk.variable} flex flex-col justify-center items-center text-center md:gap-10 gap-10 `}
    >
      <div className="md:w-[825px] md:h-14 md:px-0  px-10">
        <p className="font-clashgrotesk font-semibold md:text-2xl text-xl leading-7 text-center">
          The future of digital asset trading is here! Mint your PAAL Xclusive
          NFT today for a seamless, fee-free experience on PaalX
        </p>
      </div>
      <div className="md:w-[520px] md:h-36 md:px-0 px-16">
        <p className="font-clashgrotesk font-medium text-[15px] leading-[18px] text-center text-[#828282]">
          Secure your very own PAAL Xclusive Whitelist NFT for 0.1 ETH.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:gap-5 gap-20">
        <SmallBox
          icon="🔑"
          headline="Fee-Free Trading "
          description="Each PAAL NFT will grant you access to exclusive features within PaalX to give you an edge against other users. Enjoy a unique experience as an NFT holder."
        />
        <div className="w-[366px] h-[544px] rounded-[20px] border-[0.5px] border-solid border-base-vilolet px-10 text-center flex flex-col gap-5">
          <Image
            src="/image3.png"
            width="308"
            height="308"
            alt=""
            className="rounded-xl mt-4"
          />
          <div className="font-clashgrotesk text-[28px] text-base-vilolet font-semibold">
            Mint your NFT <span className="text-xl">(0.1 ETH)</span>
          </div>
          <p className="font-clashgrotesk text-xl text-white font-medium leading-6">
            There will be 1000 NFTs available for minting. (Max per wallet: 15)
          </p>
          <p className="font-clashgrotesk text-base  font-light leading-4 text-[#828282]">
            As a holder, you earn passive ETH from the trading volume fees.
          </p>
        </div>

        <SmallBox
          icon="🚀"
          headline="Enhanced Trading Experience: "
          description="Beyond the initial mint, your NFT transcends a digital collectible, unlocking advanced trading functionalities on PaalX."
        />
      </div>
    </section>
  );
};

interface SmallBoxProps {
  icon: string;
  headline: string;
  description: string;
}

const SmallBox = ({ icon, headline, description }: SmallBoxProps) => {
  return (
    <div className="w-[366px] h-[295px] rounded-[20px] border-[0.5px] border-solid border-base-vilolet px-10 text-center flex flex-col gap-5">
      <p className="text-8xl -mt-10">{icon}</p>
      <p className="font-clashgrotesk text-2xl text-base-vilolet font-semibold leading-7">
        {headline}
      </p>
      <p className="font-clashgrotesk text-lg  font-medium leading-5 text-[#828282]">
        {description}
      </p>
    </div>
  );
};
