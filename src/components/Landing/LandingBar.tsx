const LandingBar = () => {
  return (
    <div className="flex h-10 gap-3 items-center m-auto">
      <div className="flex h-10 items-center w-[650px] pl-4 mr-4 rounded bg-white">
        <h4 className="text-sm font-medium">Small title</h4>
      </div>
      <div className="w-5 h-5 rounded-xl bg-slate-500 "></div>
      <div className="w-5 h-5 rounded-xl bg-yellow-400 "></div>
      <div className="w-5 h-5 rounded-xl bg-red-500"></div>
    </div>
  );
};

export default LandingBar;