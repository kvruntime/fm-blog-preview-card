import './App.css'

function App() {

  return (
    <section className='min-h-screen flex flex-col justify-center items-center'>

      <article className='card p-[24px]'>
        <img src="/public/images/illustration-article.svg" alt="" />
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
            <img src="/public/images/image-avatar.webp" alt="avatar"
              className='' />
          </span>
          <span className='font-bold'>Greg Hooper</span>
        </div>

      </article>










      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </section>
  )
}

export default App
