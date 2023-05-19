import { ReactComponent as Twitter } from "./assets/svg/Twitter.svg";
import { ReactComponent as Discord } from "./assets/svg/Discord.svg";
import { ReactComponent as Facebook } from "./assets/svg/Facebook.svg";
import { ReactComponent as Telegram } from "./assets/svg/Telegram.svg";
import Moon from "./assets/images/Moon.png"
import GenInfinity from "./assets/images/GenInfinity.png"

const App = () => {

  return (
    <div className="bg-[url('./assets/images/Star-Light.gif')] h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center px-4 lg:px-24">
      <div className="hidden md:flex lg:flex justify-end lg:mb-5">
        <img src={Moon} alt=""/>
      </div>
      <div className="flex md:hidden lg:hidden justify-center lg:mb-5">
        <img src={GenInfinity} alt=""/>
      </div>
      <h1 className="text-3xl md:text-6xl font-bold mb-8 text-center">
        <span className="text-[#3E918D] font-['Clash_Display']">Gen</span><span className="text-[#3FFEF7] font-NeueMontrealBold">Infinity</span>
      </h1>
      <h2 className="text-white text-5xl md:text-7xl lg:text-9xl mb-8 font-NeueMontrealBold font-bold text-center">
        Coming Soon
      </h2>
      <p className="font-bold text-white md:text-xl lg:text-2xl text-center mb-11 font-NeueMontrealRegular">
        Gen Infinity is a DAO-based NFT project, that gives the community complete control on how the project should be ran and how its fund should be spent
      </p>
      <div className="flex justify-center gap-16">
        <a href="https://t.me/GenInfinity" target="_blank" rel="noopener noreferrer">
          <Telegram/>
        </a>
        <a href="https://discord.gg/kbakBT54jr" target="_blank" rel="noopener noreferrer">
            <Discord/>
        </a>
        <a href="https://twitter.com/GenInfinityNFT" target="_blank" rel="noopener noreferrer">
          <Twitter/>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Facebook/>
        </a>    
      </div>
    </div>
  )
}

export default App
