import HomeLogo from "./HomeLogo";

function HomeHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <span className="text-sm capitalize text-indigo-400">
          Member DashBoard
        </span>
        <h1 className="w-[70%] text-6xl font-semibold leading-tight tracking-wide text-gray-800">
          Your Reading Dashboard
        </h1>
        <p className="w-[80%] text-sm text-gray-500">
          Welcome back to your private sanctuary. Your curated collection of
          thoughts,chapters and discoveries awaits.
        </p>
      </div>
      <HomeLogo />
    </header>
  );
}

export default HomeHeader;
