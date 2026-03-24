import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center bg-slate-900 p-5 h-[100vh]">
      <h1 className="text-3xl text-rose-200">Mojito Cocktails</h1>
    </div>
  );
}
 
export default App;