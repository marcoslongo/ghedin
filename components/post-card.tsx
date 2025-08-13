import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/wordpress"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/posts/${post.slug}`}>
        {post.featuredImage && (
          <div className="relative h-48 w-full">
            <Image
              src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.categories.nodes.map((category) => (
              <Badge key={category.slug} variant="secondary">
                {category.name}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {post.author.node.avatar && (
              <Image
                src={post.author.node.avatar.url || "/placeholder.svg"}
                alt={post.author.node.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span>{post.author.node.name}</span>
            <span>•</span>
            <time>{formatDate(post.date)}</time>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
