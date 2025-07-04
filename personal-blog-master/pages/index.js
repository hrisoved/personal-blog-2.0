import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import ViewCounter from '@/components/ViewCounter'
import { useState, useEffect } from 'react'
import Typewriter from '@/components/Typewriter'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [animationDone, setAnimationDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true)
    }, 1000 + 2500) // match RoughNotation timing
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div
          className="mb-12 flex flex-col gap-x-12 px-6 sm:px-8 xl:flex-row xl:justify-between xl:px-0"
          style={{ alignItems: 'center' }}
        >
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-pink-500 dark:text-emerald-400">
                <Typewriter
                  words={[
                    'Diana',
                    'a Thinker',
                    'a Mentor',
                    'a Storyteller',
                    'a Creator',
                    'a Builder',
                  ]}
                  colors={[
                    'text-pink-500',
                    'text-amber-500',
                    'text-sky-500',
                    'text-rose-500',
                    'text-emerald-500',
                  ]}
                />
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}`}
            </h2>

            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I’m Diana — an entrepreneur, maker, and recent graduate with a passion for designing
                and communicating things that make people's lives better.
              </p>
              <RoughNotationGroup show={true}>
                <span
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%', // allow full width but limit if needed
                    whiteSpace: 'normal', // allow wrapping
                    overflow: 'visible', // no clipping for underline
                    textOverflow: 'unset',
                  }}
                >
                  You’ll find stories about my years in{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#FF0050"
                    // animationDelay={300}
                    animationDuration={800}
                  >
                    college,
                  </RoughNotation>{' '}
                  the{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#DE1D8D"
                    animationDelay={300}
                    animationDuration={800}
                  >
                    startup journey,
                  </RoughNotation>{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#A78BFA"
                    animationDelay={600}
                    animationDuration={800}
                  >
                    pitching
                  </RoughNotation>
                  ,{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#60A5FA"
                    animationDelay={900}
                    animationDuration={800}
                  >
                    mentoring
                  </RoughNotation>
                  , and building{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#FB923C	"
                    animationDelay={1200}
                    animationDuration={800}
                  >
                    confidence and
                  </RoughNotation>{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#FB923C	"
                    animationDelay={1200}
                    animationDuration={800}
                  >
                    resilience
                  </RoughNotation>{' '}
                  {/* and
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#FB923C	"
                  animationDelay={1200}
                  animationDuration={800}
                >
                  resilience
                </RoughNotation>{' '} */}
                  while working on things that matter most.
                </span>
                <p>
                  You’ll also find{' '}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#10B981"
                    animationDelay={300}
                    animationDuration={800}
                  >
                    reflections
                  </RoughNotation>{' '}
                  on neuroscience research, habit formation, decision-making, and the challenge of{' '}
                  <i>growing through discomfort</i> as a young adult on my{' '}
                  <Link
                    href={'https://substack.com/@dianahrisovescu'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Substack
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={'https://www.linkedin.com/in/diana-hrisovescu/'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    LinkedIn
                  </Link>
                </p>
                <p>Let's get started!</p>
              </RoughNotationGroup>{' '}
            </h2>
          </div>
          {/* Buttons  */}
          <div className="flex items-center justify-center">
            <div className="mt-8 grid grid-cols-1 grid-rows-3 gap-8">
              <div className="my-2 grid items-start gap-8">
                {/* Projects Button */}
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex w-80 items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      {' '}
                      <span className="flex w-64 items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Explore My Projects&nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              {/* <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/blog">
                    <span className="relative flex w-80 items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      {' '}
                      <span className="flex w-64 items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Read My Blog&nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Blog&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div> */}
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="https://substack.com/@dianahrisovescu">
                    <span className="relative flex w-80 items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      {''}
                      <span className="flex w-64 items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Follow Along on Substack&nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                      <span className="pl-6 text-sky-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Substack&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
