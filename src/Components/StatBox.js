
function StatBox() {
    var happiness = 100;
    var food = 100;
    var water = 100;

    return (
        <div className="flex w-[150px] grid gap-1 border-2 border-black rounded-lg p-1 bg-cyan-300">
            <div>
                <p className="text-lg">Stats</p>
            </div>
            <div className="flex justify-between gap-4">
                <p>Happiness:</p>
                <p>{happiness}%</p>
            </div>
            <div className="flex justify-between">
                <p>Food:</p>
                <p>{food}%</p>
            </div>
            <div className="flex justify-between">
                <p>Water:</p>
                <p>{water}%</p>
            </div>
        </div>
    );
}

export default StatBox