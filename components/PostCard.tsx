import Link from "next/link"
import { FC } from "react"

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const PostCard: FC<PostProps> = ({ id, title, body }) => (
  <Link href={`/posts/${id}`} passHref>
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </Link>
)
