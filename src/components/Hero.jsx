import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/rballestercoll/Versa_OpenAI_Article_Summarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
      summarize articles <br className="max-md:hidden" />
        <span className="orange_gradient ">With Versa</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Versa, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries using GPT-4
      </h2>
    </header>
  )
}

export default Hero