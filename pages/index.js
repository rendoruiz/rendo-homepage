import Head from 'next/head'

export default function Home() {
  return (
    <div className='grid min-h-screen bg-violet-900/20 text-white font-["Heebo"]'>
      <Head>
        <title>Rendo - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>

      <header>
        {/* site logo */} 

        {/* github, linked in */}
      </header>

      <main className='grid content-start'>
        {/* hero */}
        <section className='grid w-full max-w-screen-lg min-h-[80vh]'>
          <div className='grid content-center px-5 pt-20 pb-10 text-center'>
            <p className=' font-extralight text-7xl '>
              Hello!
            </p>
            <p className='mt-3 text-3xl font-thin tracking-wider'>
              I am <span className='font-normal'>Rendo</span>, 
              <br />
              <span className='text-2xl'>a Web Developer</span>.
            </p>

            <img  
              src='img/space.svg'
              alt='space stuff chilling (literally lmao) on space'
              className='pt-14 justify-self-center w-10/12 max-w-[320px]'
            />
          </div>

          {/* moon curve */}
          <div className='self-end grid -mb-1 pt-10 overflow-hidden'>
            <img 
              aria-hidden='true'
              src='img/curve-sm.svg' 
              className='w-full rotate-180 moon-glow'
            />
          </div>
        </section>

        {/* skills */}
        <section className='grid bg-stone-200 text-black/80'>
          <div className='grid gap-6 px-5 pt-20 pb-10'>
            <h2 className='font-light text-4xl tracking-wide'>Skills</h2>
            
            <div className='grid gap-2'>
              <h3 className='text-2xl tracking-wide'>
                My current toolset
              </h3>
              <p className='font-light text-xl tracking-wider leading-relaxed'>
                HTML, CSS, JavaScript, PHP, React.js, Next.js, Tailwind CSS, Laravel, Alpine.js, Git, GitHub, Visual Studio Code.
              </p>
            </div>

            <div className='grid gap-2'>
              <h3 className='text-2xl tracking-wide'>
                Known tools and skills
              </h3>
              <p className='font-light text-xl tracking-wider leading-relaxed'>
                C#, ASP.NET, MySQL, Android Development (Java), Java REST API, Vue.js, phpMyAdmin, Visual Studio, IntelliJ IDEA
              </p>
            </div>

            <img 
              src='img/astronaut.svg'
              alt='an astronaut reading naugthy alien (oc) smutfics on the moon'
              className='mt-6 justify-self-center drop-shadow-lg w-3/4 max-w-[250px]'
            />
          </div>
        </section>

        {/* projects */}
        <section className='grid'>
          {/* moon curve */}
          <div className='self-end grid -mt-1 pb-10 overflow-hidden'>
            <img 
              aria-hidden='true'
              src='img/curve-sm.svg' 
              className='w-full moon-glow'
            />
          </div>
          <div>
            <h2>Projects</h2>

            <div>
              <h3>Personal Works</h3>

              <div>
                <div>
                  <h4>Konolist</h4>
                  <p>A list web app simplified for your convenience.</p>
                  <p>This is my second finished project using Create React App and Tailwind CSS. The app is made to look like MS Todo, both Windows and Android vesions, for both desktop and mobile breakpoints respectively.</p>
                  <p>My first project that works as an installable Progressive Web App (PWA). The app fully works offline and also has a fancy introductory page.</p>
                  <p>User data is stored locally using local storage and is encrypted using CryptoJS.</p>
                </div>

                <div>
                  <h4>Hacker News</h4>
                  <p>My second attempt on a Hacker News (ycombinator) viewer that closely mimics Reddit's design and layout.</p>
                  <p>The goal this time is to faithfully mimic Reddit's UI/UX for both mobile and desktop breakpoints.</p>
                  <p>My first finished project using Next.js and whole other libraries.</p>
                  <p>Also my first project that has a dark mode switch built in.</p>
                  <p>Not as performant as my first attempt when run on Firefox and potentially WebKit-based browsers too.</p>
                </div>

                <div>
                  <h4>Readit News</h4>
                  <p>My larger-scale big app that I finished using Create React App.</p>
                  <p>The goal was to fully consume Hacker News' public API posted on GitHub.</p>
                  <p>Tries to loosely mimic Reddit's desktop design and layout, but still responsive enough for mobile use.</p>
                </div>

                <div>
                  <h4>Recon Game Library</h4>
                  <p>An Assembly 8086 project I created for school a project.</p>
                  <p>Contains a game selection screen and two games: Snake and Tic-Tac-Toe.</p>
                  <p>Made to run on emu8086 assembly emulator.</p>
                </div>

                {/* buttons: view | source */}
              </div>
            </div>

            <div>
              <h3>Sites I've worked on</h3>
              <p>as the Web Developer.</p>

              bridgeittech.
              abdronespecialists
            </div>
          </div>

          {/* stars background */}
          {/* lottie rocketship */}
          {/* mobile rocketship */}
        </section>

        {/* contact */}
        <section>

        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}
