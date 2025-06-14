import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import Teaching from '@/components/Teaching'
import experienceData from '@/data/experienceData'
import teachingData from '@/data/teachingData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    layout,
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little bit about me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1> */}
        </div>

        <div className="mx-auto max-w-6xl divide-y divide-gray-400">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
              <Image
                src={avatar}
                alt="avatar"
                width="192px"
                height="192px"
                className="h-48 w-48 rounded-full xl:rounded-full"
                placeholder="blur"
                blurDataURL="/static/images/SVG-placeholder.png"
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
              <div className="flex flex-col pt-3">
                <a
                  className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                  href="https://x.com/dianaHrisovescu"
                  data-screen-name="@dianaHrisovescu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <AiOutlineTwitter className="mr-2 mb-0.5 inline h-5 w-5" />
                  Say Hi!
                </a>
              </div>
            </div>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              <p>
                <RoughNotation
                  type="bracket"
                  brackets={['left', 'right']}
                  show={true}
                  color="#DE1D8D"
                  animationDelay={300}
                  animationDuration={3000}
                >
                  <p>{text1}</p>
                  <p>{text2}</p>
                  <p>
                    Recently, I have just completed my 4-years undergraduate degree in Computer
                    Science and Business with a First Class Honours at
                    <Link
                      href={'https://www.tcd.ie/'}
                      className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                    >
                      {' '}
                      University of Dublin, Trinity College
                    </Link>{' '}
                    and am heading to{' '}
                    <Link
                      href={'https://www.nd.edu/'}
                      className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                    >
                      {' '}
                      University of Notre Dame
                    </Link>{' '}
                    in Indiana to pursue a master’s as 1 of 4 Naughton Fellows selected this year on
                    the{' '}
                    <Link
                      href={'https://esteem.nd.edu/'}
                      className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                    >
                      {' '}
                      ESTEEM{' '}
                    </Link>{' '}
                    (Engineering, Science, and Technology Entrepreneurship Excellence Master)
                    program.
                  </p>
                </RoughNotation>
              </p>
            </div>

            <p>
              If you would like to have a chat feel free to reach out via any of my{' '}
              <Link
                href={'/contact'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                contacts.
              </Link>
            </p>
          </div>
          <div className="mt-10 md:pl-1">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Experience
              </h1>
            </div>
            <br></br>
            <h3 className="text-0xl md:text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-6 md:leading-3">
              Product & Engineering Experience
            </h3>
            <div className="max-w-none pt-8 pb-8 xl:col-span-2">
              {experienceData.map((d) => (
                <Experience
                  key={d.company}
                  title={d.title}
                  company={d.company}
                  location={d.location}
                  range={d.range}
                  url={d.url}
                  text1={d.text1}
                  text2={d.text2}
                  text3={d.text3}
                  text4={d.text4}
                />
              ))}
            </div>
          </div>
          <div className="md:pl-15 mt-10">
            <br></br>
            <h3 className="text-1xl font-extrabold leading-3 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-3 md:text-2xl md:leading-5">
              <br></br>Teaching, Research and Mentoring
            </h3>
            <div className="max-w-none pt-8 pb-8 xl:col-span-2">
              {teachingData.map((d) => (
                <Teaching
                  key={d.company}
                  title={d.title}
                  company={d.company}
                  location={d.location}
                  range={d.range}
                  url={d.url}
                  text1={d.text1}
                  text2={d.text2}
                  text3={d.text3}
                  text4={d.text4}
                />
              ))}
            </div>
          </div>
          <br></br>
          <p>
            <br></br>
            This site is inspired by the following{' '}
            <Link
              href={'https://github.com/pycoder2000/blog'}
              className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
            >
              template
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-0.5 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </Link>{' '}
            by Parth Desai.
          </p>
        </div>
      </div>
    </>
  )
}
