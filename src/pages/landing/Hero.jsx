import { ArrowRight } from "lucide-react";
import AuthGuardButton from "../../components/common/AuthGuardButton";

const Hero = () => {
  return (
    <section className="pt-40 pb-20 text-center relative">
      <h1 className="text-6xl font-bold leading-tight">
        <span className="text-purple-400">Your Dreams,</span>
        <br />
        <span>Your Projects,</span>
        <br />
        <span className="text-purple-300">Your Success</span>
      </h1>

      <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
        Connect with world-class talent or discover your next big opportunity.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <AuthGuardButton
          to="/dashboard/give-project"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold flex items-center gap-2"
        >
          GIVE A PROJECT <ArrowRight />
        </AuthGuardButton>

        <AuthGuardButton
          to="/dashboard/freelancer"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold flex items-center gap-2"
        >
          FREELANCER <ArrowRight />
        </AuthGuardButton>
      </div>
    </section>
  );
};

export default Hero;
