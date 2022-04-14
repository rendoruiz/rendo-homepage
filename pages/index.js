import Head from 'next/head'
import Form from '../components/Form'
import LinkButton from '../components/LinkButton'
import ProjectImage from '../components/ProjectImage'

export default function Home() {
  return (
    <div className='grid min-h-screen bg-violet-900/25 font-["Roboto"] text-white'>
      <Head>
        <title>Rendo - Home</title>
        <meta name="description" content="A space cat, lost in space." />
        <link rel="icon" href="/favicon.ico" />
        
        <meta property="og:title" content="Rendo - Home" />
        <meta property="og:description" content="A space cat, lost in space." />
        <meta property="og:url" content="https://rendo.ca/" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap" rel="stylesheet" />
      </Head>

      <header className='flex justify-between items-center mx-auto px-5 pt-5 pb-2 w-full max-w-screen-lg lg:px-9 lg:pt-7'>
        <div className='flex items-center select-none pointer-events-none'>
          <img 
            src='img/logo.svg'
            className='w-6 h-6'
          />
          <span className='ml-2 font-light text-stone-200 text-2xl tracking-wide scale-x-110 origin-left'>
            rendo
          </span>
        </div>

        <div className='grid grid-flow-col gap-6'>
          <a 
            href='https://www.linkedin.com/in/rendo-ruiz'
            className='opacity-50 hover:opacity-90'
          >
            <img 
              src='img/icon-li.svg' 
              alt='linkedin page'
              className='w-6 h-6'
            />
          </a>
          <a 
            href='https://github.com/rendoruiz'
            className='opacity-50 hover:opacity-90'
          >
            <img 
              src='img/icon-gh.svg' 
              alt='github page'
              className='w-6 h-6'
            />
          </a>
        </div>
      </header>

      <main className='grid content-start'>
        {/* hero */}
        <section className='grid min-h-[80vh]'>
          <div className='grid content-center mx-auto px-5 py-16 w-full max-w-screen-lg text-center md:grid-cols-2 md:items-center md:text-left lg:grid-cols-[1fr,1.25fr]'>
            <div className='grid content-center md:justify-self-center'>
              <p className='font-extralight text-7xl md:tracking-wide lg:font-normal lg:text-8xl'>
                Hello!
              </p>
              <p className='mt-3 font-thin text-3xl tracking-wider md:mt-5 md:text-4xl lg:text-[2.5rem] lg:leading-[1.1]'>
                I&apos;m&nbsp;
                <span className='font-normal'>Rendo</span>, 
                <br />
                <span className='text-2xl md:text-3xl md:tracking-normal lg:tracking-wide'>a Web Developer</span>.
              </p>
            </div>

            <img  
              src='img/space.svg'
              alt='space stuff chilling (literally lmao) on space'
              className='justify-self-center pt-16 w-10/12 max-w-[320px] md:pt-4 md:max-w-[350px] lg:max-w-[400px]'
            />
          </div>

          {/* moon curve */}
          <div className='self-end grid -mb-1 pt-10 overflow-hidden'>
            <img 
              aria-hidden='true'
              src='img/moon-curve.svg' 
              className='w-full rotate-180 moon-glow'
            />
          </div>
        </section>

        {/* skills */}
        <section className='grid bg-stone-200 text-black/80'>
          <div className='grid content-start gap-6 mx-auto px-5 py-16 w-full max-w-screen-lg md:grid-cols-2 md:items-center md:py-10 lg:grid-cols-[1.2fr,1fr]'>
            <div className='grid content-start gap-6 lg:gap-8'>
              <h2 className='font-light text-4xl tracking-wide md:text-5xl'>
                Skills
              </h2>
              
              <div className='grid gap-2 md:gap-3 lg:gap-4'>
                <h3 className='text-2xl tracking-wide lg:text-3xl lg:tracking-wider'>
                  My current toolset
                </h3>
                <p className='font-light text-xl tracking-wider leading-relaxed lg:text-2xl lg:leading-9'>
                  HTML, CSS, JavaScript, PHP, React.js, Next.js, Tailwind CSS, Laravel, Alpine.js, Git, GitHub, Visual Studio Code.
                </p>
              </div>

              <div className='grid gap-2 md:gap-3 lg:gap-4'>
                <h3 className='text-2xl tracking-wide lg:text-3xl lg:tracking-wider'>
                  Known tools and skills
                </h3>
                <p className='font-light text-xl tracking-wider leading-relaxed lg:text-2xl lg:leading-9'>
                  C#, ASP.NET, MySQL, Android Development (Java), Java REST API, Vue.js, phpMyAdmin, Visual Studio, IntelliJ IDEA.
                </p>
              </div>
            </div>

            <img 
              src='img/astronaut.svg'
              alt='an astronaut reading naugthy alien (oc) smutfics on the moon for extra immersion'
              className='justify-self-center pt-10 w-3/4 max-w-[250px] drop-shadow-lg md:-order-1 md:pt-0 md:w-10/12 md:max-w-[280px] lg:max-w-[320px]'
            />
          </div>
        </section>

        {/* projects */}
        <section className='grid'>
          {/* moon curve */}
          <div className='self-end grid -mt-1 pb-10 overflow-hidden'>
            <img 
              aria-hidden='true'
              src='img/moon-curve.svg' 
              className='w-full moon-glow'
            />
          </div>

          <div className='grid content-start mx-auto gap-6 px-5 py-12 w-full max-w-screen-lg md:gap-8 md:py-16 lg:gap-10 lg:py-20'>
            <h2 className='font-light text-4xl tracking-wide md:text-5xl'>
              Projects
            </h2>

            <div className='grid content-start gap-4 md:gap-5 lg:gap-7'>
              <h3 className='font-extralight text-3xl lg:text-4xl'>
                Personal Works
              </h3>

              <ul className='grid gap-14 tracking-wide md:grid-cols-2 lg:gap-16 lg:font-light lg:text-lg'>
                <li className='grid gap-4 md:grid-rows-[auto,1fr,auto]'>
                  <ProjectImage 
                    src='img/card-kl.png' 
                    alt='konolist card image'
                  />

                  <div className='grid content-start gap-3'>
                    <h4 className='font-medium text-2xl lg:font-normal lg:text-3xl lg:tracking-wide'>
                      Konolist
                    </h4>
                    <p className='font-normal italic'>
                      &quot;A list web app simplified for your convenience.&quot;
                    </p>
                    <p>
                      This is my second finished project using Create React App and Tailwind CSS. The app is made to look like MS Todo, both Windows and Android vesions, for both desktop and mobile breakpoints respectively.
                    </p>
                    <p>
                      My first project that works as an installable Progressive Web App (PWA). The app fully works offline and also comes with a fancy introductory page.
                    </p>
                    <p>
                      User data is stored locally on local storage and is encrypted using CryptoJS.
                    </p>
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    <LinkButton 
                      text='View'
                      href='https://www.kono.cx/'
                    />
                    <LinkButton 
                      text='Source'
                      href='https://github.com/rendoruiz/kono-list'
                    />
                  </div>
                </li>

                <li className='grid gap-4 md:grid-rows-[auto,1fr,auto]'>
                  <ProjectImage 
                    src='img/card-hn.png' 
                    alt='hacker news card image'
                  />

                  <div className='grid content-start gap-3'>
                    <h4 className='font-medium text-2xl lg:font-normal lg:text-3xl lg:tracking-wide'>
                      Hacker News
                    </h4>
                    <p className='font-normal italic'>
                      &quot;Browse Hacker News with Reddit&apos;s design and layout.&quot;
                    </p>
                    <p>
                      My second attempt on a Hacker News viewer and the goal this time is to faithfully mimic Reddit&apos;s looks even further for both mobile and desktop breakpoints.
                    </p>
                    <p>
                      This project is the first one I have finished using Next.js together with whole other libraries.
                    </p>
                    <p>
                      It is also my first project that has a dark mode switch built in.
                    </p>
                    <p>
                      However, it is not as performant as my first attempt when ran on Firefox and potentially WebKit-based browsers too.
                    </p>
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    <LinkButton 
                      text='View'
                      href='https://news.knkd.app/'
                    />
                    <LinkButton 
                      text='Source'
                      href='https://github.com/rendoruiz/nextjs-hackernews'
                    />
                  </div>
                </li>

                <li className='grid gap-4 md:grid-rows-[auto,1fr,auto]'>
                  <ProjectImage 
                    src='img/card-rn.png' 
                    alt='readit news card image'
                  />

                  <div className='grid content-start gap-3'>
                    <h4 className='font-medium text-2xl lg:font-normal lg:text-3xl lg:tracking-wide'>
                      Readit News
                    </h4>
                    <p>
                      My first web app project at this scale created using Create React App.
                    </p>
                    <p>
                      Has support for home page, story page, and user page.
                    </p>
                    <p>
                      The goal for this project is to fully consume Hacker News&apos; public API that is posted on GitHub.
                    </p>
                    <p>
                      It tries to mimic Reddit&apos;s desktop design and layout very loosely, but still responsive enough for mobile use.
                    </p>
                  </div>
                  
                  <div className='grid grid-cols-2 gap-3'>
                    <LinkButton 
                      text='View'
                      href='https://old.news.knkd.app/'
                    />
                    <LinkButton 
                      text='Source'
                      href='https://github.com/rendoruiz/reactjs-hackernews'
                    />
                  </div>
                </li>

                <li className='grid gap-4 md:grid-rows-[auto,1fr,auto]'>
                  <ProjectImage 
                    src='img/card-rgl.png' 
                    alt='recon game library card image'
                  />

                  <div className='grid content-start gap-3'>
                    <h4 className='font-medium text-2xl lg:font-normal lg:text-3xl lg:tracking-wide'>
                      Recon Game Library
                    </h4>
                    <p>
                      An old Assembly 8086 project I once created for school a project.
                    </p>
                    <p>
                      The program starts with the home screen showing game selection menu for two games: Snake and Tic-Tac-Toe.
                    </p>
                    <p>
                      Made to run on emu8086 assembly emulator.
                    </p>
                  </div>
                  
                  <div className='grid'>
                    <LinkButton 
                      text='Source'
                      href='https://github.com/rendoruiz/asm8086-recongamelibrary'
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className='grid content-start gap-4 mt-6 md:gap-5 lg:gap-7'>
              <div className='grid content-start'>
                <h3 className='font-extralight text-3xl lg:text-4xl'>
                  Sites I&apos;ve worked on,
                </h3>
                <p className='mt-1 font-thin text-base leading-none tracking-widest lg:text-lg'>
                  as the Web Developer.
                </p>
              </div>
              
              <ul className='grid content-start gap-12 tracking-wide md:grid-cols-2 lg:gap-16'>
                <li className='grid content-start gap-4'>
                  <ProjectImage 
                    src='img/card-abdrones.png' 
                    alt='alberta drone specialists card image'
                  />

                  <h4 className='font-medium text-2xl lg:font-normal lg:tracking-wide'>
                    Alberta Drone Specialists
                  </h4>

                  <div className='grid'>
                    <LinkButton 
                      text='View'
                      href='https://abdronespecialists.ca/'
                    />
                  </div>
                </li>

                <li className='grid content-start gap-4'>
                  <ProjectImage 
                    src='img/card-bridgeit.png' 
                    alt='bridgeit tech solutions card image'
                  />

                  <h4 className='font-medium text-2xl lg:font-normal lg:tracking-wide'>
                    BridgeIT Tech Solutions
                  </h4>

                  <div className='grid'>
                    <LinkButton 
                      text='View'
                      href='https://bridgeittech.ca/'
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className='relative grid'>
          <div className='relative grid gap-6 content-start mx-auto px-5 py-10 w-full max-w-screen-lg md:grid-cols-2 md:pb-16 lg:grid-cols-[1fr,1.2fr] lg:gap-8'>
            <img
              src='img/spacecat.svg'
              alt='stranded lab cat wandering on space, thinking about its life choices (assuming it had one)'
              className='justify-self-center w-full max-w-[320px] md:self-center md:order-2 md:max-w-[350px]'
            />

            <div className='grid content-start gap-6'>
              <h2 className='font-light text-4xl tracking-wide md:text-5xl'>
                Contact
              </h2>

              <Form />
            </div>
          </div>
        </section>
      </main>

      <footer className='grid'>
        <div className='grid place-items-center mx-auto p-5 w-full max-w-screen-lg'>
          <p className='font-light text-stone-100'>
            <span className='opacity-50'>
              &copy; 2022&nbsp;
            </span>
            <a 
              href='https://rendo.ca'
              target='_blank'
              rel='noreferrer'
              className='font-normal opacity-50 transition-opacity hover:opacity-100'
            >
              Rendo Ruiz
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
