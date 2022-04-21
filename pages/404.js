const Custom404 = () => (
  <div className='grid place-items-center min-h-screen bg-violet-900/25 font-["Roboto"] text-white'>
    <div className='grid px-5 py-8 font-extralight text-center'>
      <h2 className='font-light text-3xl bp360:text-4xl md:text-5xl'>Blackhole reached</h2>
      <p className='mt-2 text-xl tracking-wide md:mt-3 md:text-3xl'>There's nothing here.</p>
      <a 
        href='/'
        className='justify-self-center border-2 border-stone-200 rounded-lg mt-8 px-5 py-2 font-normal text-sm text-center leading-tight tracking-wider uppercase transition-all hover:bg-stone-200 hover:text-black active:outline active:outline-2 active:outline-offset-4 active:outline-stone-200 md:mt-10 md:text-base'
      >
        Warp back home
      </a>
    </div>
  </div>
)
 
export default Custom404;