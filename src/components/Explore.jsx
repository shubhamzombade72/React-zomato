export default function Widget() {
    return (
        <div className="p-4 container">
            <h2 className="mb-4">Explore options near me</h2>
            <div className="space-y-4 ">
                <div className="flex w-100 items-center bg-card border border-border p-4 rounded-lg hover:bg-muted ">
                    <span className="flex-grow text-left w-full">Popular Cuisines Near Me</span>
                    <span className="float-right">▼</span>
                </div>
                <div className="flex w-100 items-center bg-card border border-border p-4 rounded-lg hover:bg-muted">
                    <span className="flex-grow text-left w-full">Popular Restaurant Types Near Me</span>
                    <span className="float-right">▼</span>
                </div>
                <div className="flex w-100 items-center bg-card border border-border p-4 rounded-lg hover:bg-muted">
                    <span className="flex-grow text-left w-full">Top Restaurant Chains</span>
                    <span className="float-right">▼</span>
                </div>
                <div className="flex w-100 items-center bg-card border border-border p-4 rounded-lg hover:bg-muted">
                    <span className="flex-grow text-left w-full">Cities We Deliver To</span>
                    <span className="float-right">▼</span>
                </div>
            </div>
        </div>
    );
}
