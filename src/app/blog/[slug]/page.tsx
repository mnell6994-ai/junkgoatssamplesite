'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"

interface BlogArticle {
  id: string
  title: string
  slug: string
  content: string
  author: string
  publish_date: string
  featured_image_url: string | null
  featured_image_alt: string | null
  category: string | null
  tags: string[]
  seo_title: string | null
  seo_description: string | null
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const [article, setArticle] = useState<BlogArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      fetchBlogArticle()
    }
  }, [slug])

  const fetchBlogArticle = async () => {
    try {
      setLoading(true)
      
      // Get website_id from environment or config
      const websiteId = process.env.NEXT_PUBLIC_WEBSITE_ID || '73511883-abb8-44f4-b466-df9b82573dae'
      
      const response = await fetch(`/api/blog/${slug}?website_id=${websiteId}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog article')
      }

      const data = await response.json()
      setArticle(data)
    } catch (err) {
      console.error('Error fetching blog article:', err)
      setError('Article not found')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Article not found'}</p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 inline" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/elevateprosites-logo.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-semibold">
                Home
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-blue-600 font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-semibold">
                Contact
              </Link>
              <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-slate-900">{article.title}</li>
            </ol>
          </nav>

          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Category */}
          {article.category && (
            <div className="mb-4">
              <span className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full">
                {article.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center text-slate-600 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center mr-6">
              <User className="h-5 w-5 mr-2" />
              <span>{article.author || 'Admin'}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(article.publish_date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={article.featured_image_url}
                alt={article.featured_image_alt || article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center mb-4">
                <Tag className="h-5 w-5 text-slate-600 mr-2" />
                <h3 className="text-lg font-bold text-slate-900">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Let&apos;s discuss your project
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
              <Link href="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 mt-20">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-slate-400">
            © 2025 Elevate Pro Sites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
