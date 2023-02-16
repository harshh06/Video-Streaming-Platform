const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center" data-testid="shimmer">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div
                        key={index}
                        className=" w-72 p-2 m-2 shadow-sm bg-gray-100 rounded-md h-72 "></div>
                ))}
        </div>
    );
};

export default Shimmer;
