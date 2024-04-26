const Splash = ({ count = 1, pos = "st" }: { count: number; pos: string }) => {
  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{`Hello there!`}</h1>
          <p className="py-6">{`You're the ${count + pos} unique visitor`}</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
