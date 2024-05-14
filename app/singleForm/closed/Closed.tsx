"use client"

const Closed = () => {
    return (
        <div className="w-screen md:h-screen h-screen flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
            <h1 className="font-strike text-red-400 md:text-[50px] text-[30px] text-center text-wrap md:p-0 p-[10px]">
                Registrations has been closed!!
            </h1>
        </div>
    )
}

export default Closed