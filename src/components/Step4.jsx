

function Step4({vis,setvis}){

    function submitHandler(){
        setvis(5);
    }
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <p className='text-white text-xl w-[70%] text-center sm:w-full'>Divide Your Current Total By 2</p>
            <button className="bg-white p-2 text-black rounded-lg" onClick={submitHandler}>Next</button>
        </div>
    )
}

export default Step4;