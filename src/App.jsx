import { ReactComponent as Twitter } from "./assets/svg/Twitter.svg";
import { ReactComponent as Discord } from "./assets/svg/Discord.svg";
import { ReactComponent as Facebook } from "./assets/svg/Facebook.svg";
import { ReactComponent as Telegram } from "./assets/svg/Telegram.svg";
import Moon from "./assets/images/Moon.png"

const App = () => {

  return (
    <div className="bg-[url('./assets/images/Star-Light.gif')] h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center px-24">
      <div className="flex justify-end mb-5">
        <img src={Moon} alt=""/>
      </div>
      <h1 className="text-6xl font-bold mb-8 text-center">
        <span className="text-[#3E918D] font-['Clash_Display']">Gen</span><span className="text-[#3FFEF7] font-NeueMontrealBold">Infinity</span>
      </h1>
      <h2 className="text-white text-9xl mb-8 font-NeueMontrealBold font-bold text-center">
        Coming Soon
      </h2>
      <p className="font-bold text-white text-center mb-11  font-NeueMontrealRegular">
      Gen Infinity is a DAO-based NFT project, that gives the community complete control on how the project should be ran and how its fund should be spent
      </p>
      <div className="flex justify-center gap-16">
        <Telegram/>
        <Discord/>
        <Twitter/>
        <Facebook/>
      </div>
    </div>
  )
}

export default App
