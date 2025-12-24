import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";
import { findUser } from "../../features/auth/authService";
import { Eye } from "lucide-react";
import { useState } from "react";

const Login = ({ onSwitch }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = (data) => {
    const user = findUser(data.email, data.password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    dispatch(login(user));
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-purple-950 to-black">

 
      {/* MAIN LAYOUT */}
      <div className="flex min-h-screen">

        {/* LEFT — LOGIN FORM */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <div
            className="w-full max-w-md text-white
                      
                       rounded-2xl p-8 shadow-2xl"
          >
            <h1 className="text-3xl font-semibold mb-1">
              Welcome!
            </h1>
            <p className="text-gray-400 mb-6">
              Log in to Forge to continue.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your email address"
                  className="w-full mt-1 px-4 py-2.5
                             bg-black/40 border border-purple-500/20
                             rounded-lg focus:outline-none
                             focus:border-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label className="text-sm text-gray-400">
                    Password
                  </label>
                  <span className="text-sm text-purple-400 cursor-pointer">
                    Forgot password?
                  </span>
                </div>

                <div className="relative mt-1">
                  <input
                    type={showPwd ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Your password"
                    className="w-full px-4 py-2.5
                               bg-black/40 border border-purple-500/20
                               rounded-lg focus:outline-none
                               focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 hover:text-gray-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                    className="w-full py-2.5 mt-2
                           bg-gradient-to-r from-purple-600 to-purple-700
                           hover:from-purple-700 hover:to-purple-800
                           rounded-lg font-semibold transition"
              >
                Log in
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-6 text-center">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={onSwitch}
                className="text-purple-400 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>

        {/* RIGHT — MARKETING */}
        <div className="hidden lg:flex w-1/2 items-center justify-center
                        bg-gradient-to-br from-purple-900/40 via-black to-black relative">
          <div className="text-center max-w-md px-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              400K+ users.
              <br />
              <span className="text-purple-400">
                Powering real projects.
              </span>
            </h2>

            <p className="text-gray-400 mb-8">
              Hire freelancers, manage tasks, and deliver faster with Forge.
            </p>

            <button
              onClick={onSwitch}
              className="inline-flex items-center gap-2
                         bg-gradient-to-r from-purple-600 
                         hover:from-purple-700
                         px-6 py-2 rounded-full font-semibold transition"
            >
              Join Now →
            </button>
          </div>

          {/* Purple Glow */}
          <div className="absolute bottom-24 w-72 h-72
                          bg-purple-600/20 rounded-full blur-3xl" />
        </div>

      </div>
    </div>
  );
};

export default Login;
