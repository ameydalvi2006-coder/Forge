import { useForm } from "react-hook-form";
import { getUsers } from "../../features/auth/authService";
import { Eye } from "lucide-react";
import { useState } from "react";

const Register = ({ onSwitch }) => {
  const { register, handleSubmit, reset } = useForm();
  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = (data) => {
    const users = getUsers();
    const exists = users.some((u) => u.email === data.email);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    reset();
    onSwitch();
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="flex min-h-screen">
        {/* LEFT — REGISTER FORM */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <div className="w-full max-w-md text-white rounded-2xl p-8 shadow-2xl bg-black/30 backdrop-blur">
            <h1 className="text-3xl font-semibold mb-1">
              Create account
            </h1>
            <p className="text-gray-400 mb-6">
              Sign up to start using Forge.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your full name"
                  className="w-full mt-1 px-4 py-2.5
                             bg-black/40 border border-purple-500/20
                             rounded-lg focus:outline-none
                             focus:border-purple-500"
                />
              </div>

              {/* EMAIL */}
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

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-400">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    type={showPwd ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Create a password"
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

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-2.5 mt-2
                           bg-gradient-to-r from-purple-600 to-purple-700
                           hover:from-purple-700 hover:to-purple-800
                           rounded-lg font-semibold transition"
              >
                Create account
              </button>
            </form>

            {/* SWITCH */}
            <p className="text-sm text-gray-400 mt-6 text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitch}
                className="text-purple-400 hover:underline font-medium"
              >
                Log in
              </button>
            </p>
          </div>
        </div>

        {/* RIGHT — MARKETING */}
        <div className="hidden lg:flex w-1/2 items-center justify-center
                        bg-gradient-to-br from-purple-900/40 via-black to-black relative">
          <div className="text-center max-w-md px-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Build faster.
              <br />
              <span className="text-purple-400">
                Work smarter.
              </span>
            </h2>

            <p className="text-gray-400 mb-8">
              Join Forge and collaborate on real-world projects with ease.
            </p>

           
          </div>

          {/* PURPLE GLOW */}
          <div className="absolute bottom-24 w-72 h-72
                          bg-purple-600/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Register;
