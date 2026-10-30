
import { GraphStar,SquareTerminal,MessageSquare,Megaphone } from 'lucide-react';
const Footer = ({}) => {
  return <footer className="bg-[#171A3A]">
    <hr className='border-slate-700 mx-6 mt-8' />
    <div className="flex items-center justify-between px-6 py-4 text-slate-400 text-sm mt-6">
      <p>
        &copy; 2026 DevNexus. All rights reserved.
      </p>

    <div className="flex items-center gap-4">
      <button className="hover:text-white transition-colors" aria-label="Editor">
        <SquareTerminal className="w-5 h-5" />
      </button>
      <button className="hover:text-white transition-colors" aria-label="Network">
        <GraphStar className="w-5 h-5" />
      </button>
      <button className="hover:text-white transition-colors" aria-label="Chat">
        <MessageSquare className="w-5 h-5" />
      </button>
      <button className="hover:text-white transition-colors" aria-label="Broadcast">
        <Megaphone className="w-5 h-5" />
      </button>
    </div>
    </div>
</footer>
}

export default Footer

