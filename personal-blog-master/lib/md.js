import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'
import getAllFilesRecursively from './utils/files'
import siteMetadata from '@/data/siteMetadata'

const root = process.cwd()

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)

  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const { frontmatter, code } = await bundleMDX({
    source,
    cwd: path.join(root, 'components'),
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])]
      options.rehypePlugins = [...(options.rehypePlugins ?? [])]
      return options
    },
  })

  return {
    mdxSource: code,
    frontMatter: {
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
    },
  }
}
