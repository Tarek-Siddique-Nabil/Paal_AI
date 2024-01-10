import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export const Two = () => {
  return (
    <section
      className={`second-section h-screen ${ClashGrotesk.variable} flex flex-col justify-center items-center text-center md:gap-10 gap-10`}
    >
      <div className="md:w-[825px] md:h-14 ">
        <p className="font-clashgrotesk font-semibold text-2xl leading-7 text-center">
          Embrace the future of digital asset trading. Mint your PAAL Xclusive
          NFT today for seamless, fee-free experiences on PaalX v1.1.
        </p>
      </div>
      <div className="md:w-[520px] md:h-36 ">
        <p className="font-clashgrotesk font-medium text-[15px] leading-[18px] text-center text-[#828282]">
          🌟NFT Mint Launch: Dive into the exclusive PAAL Xclusive NFT Minting,
          now open! Secure your very own PAAL Xclusive Whitelist NFT for just
          0.1 ETH.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:gap-5 gap-20">
        <SmallBox
          icon="🔑"
          headline="Exclusive Benefits"
          description="Each PAAL Xclusive NFT is not only a testament to your pioneering spirit but also a gateway to exceptional privileges. Enjoy zero trading fees on the innovative PaalX v0.1 platform as an NFT holder."
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
            Mint your NFT <span className="text-xl">(0.1 ETH)</span>I
          </div>
          <p className="font-clashgrotesk text-xl text-white font-medium leading-6">
            There will be 1000 NFTs available for minting.
          </p>
          <p className="font-clashgrotesk text-base  font-light leading-4 text-[#828282]">
            One mint per wallet. The NFT will be used to claim your relay in
            stage two.
          </p>
        </div>

        <SmallBox
          icon="🚀"
          headline="Exclusive Benefits"
          description="Each PAAL Xclusive NFT is not only a testament to your pioneering spirit but also a gateway to exceptional privileges. Enjoy zero trading fees on the innovative PaalX v0.1 platform as an NFT holder."
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
