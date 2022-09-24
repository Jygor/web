import {MagnifyingGlassPlus} from 'phosphor-react'
import "./styles/main.css"
import logoImg from "./assets/Logo.svg"



function App() {
  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
    <img src={logoImg} alt="logo da nlw" />
    <h1 className="text-6xl text-white font-black mt-10">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

    <div className="grid grid-cols-6 gap-6 mt-8">
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-1.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">League of Legends</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-2.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">Dota 2</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-3.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">Counter Stike</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-4.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">Apex Legends</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-5.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">Fortnite</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
     <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-6.png" alt="" />
      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">World of Warcraft</strong>
        <span className="text-zinc-400 text-sm block">4 anuncio</span>
      </div>
    </a>
    </div>

    <div className="pt-1 mt-4 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
    <div className="bg-[#2A2634] py-6 self-stretch flex justify-between items-center">
      <div>
        <strong className="text-1x text-white font-black block ml-4">Não encontrou seu duo?</strong>
        <span className="text-zinc-400 block ml-4">Publique um anúncio para encontrar novos players!</span>
      </div>

      <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded mr-6 flex items-center gap-3">
        <MagnifyingGlassPlus size={24}/>
        publicar anuncio 
      </button>
    </div>
    </div>
   </div>
  )
}

export default App
