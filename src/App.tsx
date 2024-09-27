import './App.css'
import illustration from "/public/images/illustration-article.svg"
import avatar from "/public/images/image-avatar.webp"

function App() {

  return (
    <section>
      <main className='min-h-screen flex flex-col justify-center items-center gap-2 px-3'>

        <article className='card p-[24px]'>
          <img src={illustration} alt="illustration" />
          <div className='my-5'>
            <div ><span className='font-extrabold  bg-[--yellow] rounded-[5px] px-2 py-1'>Learning</span></div>
            <div className='font-semibold my-3 '><span>Published 21 Dec 2023</span></div>
            <h2 className='font-bold hover:text-[--yellow] text-xl'>HTML & CSS foundations</h2>
            <p className='py-2 text-[--gray-500]'>
              These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
          </div>

          <div className='flex flex-row items-center justify-start gap-2'>
            <span className='card-user-profile'>
              <img src={avatar} alt="avatar"
                className='' />
            </span>
            <span className='font-bold'>Greg Hooper</span>
          </div>

        </article>











      </main>
      <div className="attribution ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">kvruntime</a>.
      </div>
    </section>
  )
}

export default App
