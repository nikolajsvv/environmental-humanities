import '../../styles/decanter/decanter.css';

const StanfordBanner = () => {
  return (
    <section className="absolute z-50 top-0 left-0 w-full h-[30px] bg-[#2e2d29] text-white">
      <div className="ml-20">
        <a className="su-brand-bar__logo cursor-pointer" href="https://stanford.edu">Stanford University</a>
      </div>
    </section>
  );
}

export default StanfordBanner