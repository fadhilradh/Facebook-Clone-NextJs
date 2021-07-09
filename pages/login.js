import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
    return (
        <section className="h-screen w-full flex flex-col items-center pt-44 bg-gray-100">
            <div className="flex flex-row items-center mb-3">
                <Image
                    src="https://links.papareact.com/t4i"
                    alt="logo"
                    height={70}
                    width={80}
                    objectFit="contain"
                />
                <p className="font-titilium text-blue-500 font-bold text-5xl">
                    fadhbook
                </p>
            </div>
            <div
                className="flex flex-col items-center justify-center w-5/6 sm:w-3/4 
      md:w-96 h-64 bg-white shadow-md rounded-xl space-y-3 border border-gray-100"
            >
                <p className="text-blue-500 text-lg ">
                    Login with Google Account
                </p>
                <button
                    onClick={signIn}
                    className="w-5/6 rounded-md px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white 
        font-semibold text-xl h-15 focus:outline-none transition duration-150 ease-in transform active:scale-95 "
                >
                    Log In
                </button>
                <p>or</p>
                <button
                    disabled
                    className="w-5/6 rounded-md px-6 py-3 bg-[#42B72B] hover:bg-[#369323] text-white 
        font-semibold text-lg h-15 focus:outline-none transition duration-150 ease-in transform active:scale-95 "
                >
                    Log In Without Account | (Under Development)
                </button>
            </div>
        </section>
    );
}

export default Login;
