import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Tweet from '@/components/Tweet'
import { getTweets } from '@/lib/twitter'

// export async function getStaticProps() {
//   const tweets = await getTweets([
//     '1189444653059174401',
//     '935857414435495937',
//     '1334528781139259400',
//     '1334334544598740994',
//     '826528907381739520',
//     '1308509070140162048',
//     '1385236589547331589',
//     '1402689156434776069',
//     '997895977179721728',
//     '1341090253864542208',
//     '1383873047619276812',
//     '1435677021590351873',
//     '1026872652290379776',
//     '1346113149112619016',
//     '1340107217970683906',
//     '992629481578745856',
//     '989142253468708864',
//     '807626710350839808',
//     '1341962177272537089',
//     '1342869937841266688',
//     '1116362674319908864',
//     '1471558914579722245',
//     '1331380003716681728',
//     '1002104154737684480',
//   ])

//   return { props: { tweets } }
// }

export default function Tweets({ tweets = [] }) {
  return (
    <>
      <PageSEO
        title={`Tweets - ${siteMetadata.author}`}
        description="A collection of tweets that inspire me, make me laugh, and make me think."
      />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tweets
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            This is a collection of tweets I've enjoyed. I use Twitter quite a bit, so I wanted a
            place to publicly share what inspires me, makes me laugh, and makes me think.
          </p>
        </div>
        {tweets.length === 0 ? (
          <p className="text-gray-400">No tweets to show at the moment.</p>
        ) : (
          tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)
        )}
      </div>
    </>
  )
}
