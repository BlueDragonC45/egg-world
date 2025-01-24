import Eggy from "./Eggy";
import StatBox from "./StatBox";

function Home() {
    return (
        <div className="flex h-[75vh] w-screen grid grid-cols-12 gap-0 px-8 py-8 bg-cyan-300">
            <div className="flex-wrap h-inherit content-end col-span-2">
                <StatBox />
            </div>
            <div className="flex col-start-3">

            </div>
            <div className="flex flex-wrap h-inherit place-content-center col-start-4 col-span-6">
                <Eggy />
            </div>
            <div className="flex h-inherit col-start-10 col-span-3">

            </div>
        </div>
    );
}

export default Home;
