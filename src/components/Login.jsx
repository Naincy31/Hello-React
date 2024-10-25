const Login = () => {
    return (
        <div className="m-auto bg-white w-[600] mt-8 h-[500] p-5 flex flex-col items-center gap-7">
            <h1 className="font-extrabold text-xl">Login</h1>
            <div className="flex flex-col w-[70%]">
                <label htmlFor="email" className="mb-2">Email: </label>
                <input type="text" id="email" placeholder="Enter Email" className="border p-1 mb-5"/>
                <label htmlFor="password" className="mb-2">Password: </label>
                <input type="password" id="password" placeholder="Enter Password" className="border p-1"/>
                <p className="text-center mt-4">Forgot Password?</p>
                <button className="w-full border mt-6 p-2 bg-orange-400 text-white text-lg">Login</button>
            </div>
        </div>
    )
}

export default Login