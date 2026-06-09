import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SearchBar() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="bg-background-50 py-10 md:py-14">
      <div className="w-full px-5 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <form
            action="https://techadvancement.com/"
            method="get"
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative flex-1 w-full">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-foreground-400 text-base" />
              <input
                type="text"
                name="s"
                placeholder="Search resources, tools, documentation..."
                className="w-full text-sm pl-11 pr-4 py-3.5 rounded-xl border border-background-200/80 bg-background-50 text-foreground-700 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 transition-all duration-300 placeholder:text-foreground-400"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3.5 bg-primary-700 text-background-50 rounded-xl text-sm font-semibold hover:bg-primary-800 transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}