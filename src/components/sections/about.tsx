function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-t border-zinc-900 px-6 py-14"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[220px_minmax(0,48rem)_220px]">
        {/* Left image */}
        <img
          src="/images/profile.jpg"
          alt="Brandon"
          className="mt-9 self-start mx-auto aspect-square w-48 rounded-2xl object-cover lg:w-full"
        />

        {/* Centered container with left-aligned text */}
        <div className="mx-auto max-w-11/12 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold">Brandon Shin</h2>

          <div className="mt-5 space-y-3 leading-7 text-zinc-400">
            <p>
              I am a computer science graduate from UC Riverside and an incoming
              Master of Software Engineering student at UC Irvine. I am a
              Irvine.computer science graduate from UC Riverside and an incoming
              Master of Software Engineering student at UC Irvine.I am a
              computer student at UC Irvine.computer science graduate from UC
              Riverside and an incoming Master of Software Engineering student
              at UC Irvine.I am a computer student at UC Irvine.
            </p>

            <p>
              I am a computer science graduate from UC Riverside and an incoming
              and an incoming Master of Software Engineering student at UC
              Irvine.I am a computer science graduate from UC Riverside and an
              incoming Master of Software Engineering student at UC Irvine.
            </p>

            <p>
              I am a computer science graduate from UC Riverside and an incoming
              Master of Software Engineering student at UC Irvine.I am a from UC
              Riverside and an incoming Master of Software Engineering student
              at UC Irvine.
            </p>
          </div>
        </div>
        <img
          src="/images/profile.jpg"
          alt="Brandon"
          className="self-start mx-auto aspect-square w-48 rounded-2xl object-cover lg:w-full"
        />

        {/* Balances the image column so the text stays centered */}
        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </section>
  );
}

export default About;
