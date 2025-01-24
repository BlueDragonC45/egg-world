import EggyPic from '../Assets/Eggy.png';

function Eggy() {
    return (
        <div className="bg-cyan-300">
            <img className="h-[270px] w-[200px]" src={EggyPic} alt="logo" />
        </div>
    );
}

export default Eggy;