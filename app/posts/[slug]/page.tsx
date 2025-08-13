import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug } from "@/lib/wordpress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                alt={post.featuredImage.node.altText || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.nodes.map((category) => (
                <Badge key={category.slug} variant="secondary">
                  {category.name}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              {post.author.node.avatar && (
                <Image
                  src={post.author.node.avatar.url || "/placeholder.svg"}
                  alt={post.author.node.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium text-foreground">{post.author.node.name}</p>
                <time className="text-sm">{formatDate(post.date)}</time>
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}
