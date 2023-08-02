import dynamic from "next/dynamic"

const PostContentBlock = dynamic(() => import('./blocks/post-content-block'))
const PostQuoteBlock = dynamic(() => import('./blocks/post-quote-block'))

export default function Block({ block }) {

  const type = block._type

  switch (type) {
    case 'postContentBlock':
      return <PostContentBlock block={block} />
    case 'postQuoteBlock':
      return <PostQuoteBlock block={block} />
  }

}