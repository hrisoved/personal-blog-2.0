import SocialIcon from './social-icons'
import FolderIcon from './icon'

const Card = ({ title, description, imgSrc, href, github, tech, status }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <FolderIcon />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <SocialIcon kind="external" href={href} size="6" /> : null}
            </div>
            <div className="mx-1.5">
              {github ? <SocialIcon kind="github" href={github} size="6" /> : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        {status && (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              status === 'Active'
                ? 'bg-green-100 text-green-800'
                : status === 'In Progress'
                ? 'bg-yellow-100 text-yellow-800'
                : status === 'Completed'
                ? 'bg-blue-100 text-blue-800'
                : status === 'Archived'
                ? 'bg-gray-200 text-gray-700'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {status}
          </span>
        )}
        <p
          className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {tech?.map((item) => (
            <span
              key={item}
              className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900 dark:text-pink-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Card
