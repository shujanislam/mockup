import bg from './assets/bg.jpg'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <>
<div className="mt-38 py-8 flex justify-center items-center px-4">
  <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">

    {/* FORM SECTION */}
    <div className="w-full p-8 lg:w-1/2 h-[600px]">
      <h2 className="text-2xl font-semibold text-black text-center">
        Welcome to MeshFold
      </h2>
      <p className="p-2 text-gray-600 text-center">Login to your Account</p>

      <div className="mt-4 mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-4">
          Email
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline 
          border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
        />
      </div>

      <div className="mt-4 mb-8">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-4">
            Password
          </label>
          <a href="#" className="text-sm text-gray-500">
            Forgot your Password?
          </a>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline 
          border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
        />
      </div>

      <div className="mt-8">
        <button className="bg-black text-white font-bold py-2 px-4 w-full rounded " onClick={navigateDashboard}>
          Login
        </button>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="border-b border-gray-300 w-2/5 md:w-2/5"></span>
        <a href="#" className="text-xs text-gray-500 uppercase">Or</a>
        <span className="border-b border-gray-300 w-2/5 md:w-2/5"></span>
      </div>

      <div className="flex items-center justify-center mt-4">
      <a
        href="#"
        className="flex w-[50%] items-center justify-center mt-4 text-white rounded-lg border border-gray-300"
      >
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Login with SSO
        </h1>
      </a>
      </div>
      <div className="flex justify-center items-center px-4 pt-8">
        <span>
          Don't have an Account? <a href="#" className="underline">Sign up</a>
        </span>
      </div>
    </div>

    {/* IMAGE SECTION */}
    <div
      className="hidden lg:block lg:w-1/2 bg-cover bg-center"
      style={{
        backgroundImage:`url(${bg})`  
      }}
    ></div>
  </div>
</div>

  <div className="flex items-center justify-center">
    <p className="text-gray-600 text-sm">By continue, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a> </p>
  </div>
    </>
  )
}

export default App
