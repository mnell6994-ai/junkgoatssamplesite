'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search } from "lucide-react"

interface BlogArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publish_date: string
  featured_image_url: string | null
  category: string | null
  seo_title: string | null
  seo_description: string | null
}

export default function BlogPage() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchBlogArticles()
  }, [])

  const fetchBlogArticles = async () => {
    try {
      setLoading(true)
      
      // Get website_id from environment or config
      // For now, using a placeholder - you'll need to configure this per client site
      const websiteId = process.env.NEXT_PUBLIC_WEBSITE_ID || '73511883-abb8-44f4-b466-df9b82573dae'
      
      const response = await fetch(`/api/blog?website_id=${websiteId}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog articles')
      }

      const data = await response.json()
      setArticles(data.articles || [])
    } catch (err) {
      console.error('Error fetching blog articles:', err)
      setError('Failed to load blog articles. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading blog articles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <Button onClick={fetchBlogArticles} className="bg-orange-500 hover:bg-orange-600 text-white">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as other pages */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Latest insights, tips, and updates
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-slate-600 mb-4">No blog articles found</p>
              <p className="text-slate-500">
                {searchTerm ? 'Try adjusting your search terms' : 'Check back soon for new content'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {/* Featured Image */}
                  {article.featured_image_url && (
                    <div className="aspect-video bg-slate-200 overflow-hidden">
                      <img
                        src={article.featured_image_url}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    {article.category && (
                      <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {article.category}
                      </span>
                    )}

                    {/* Title */}
                    <h2 className="text-2xl font-black text-slate-900 mb-3">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    {article.excerpt && (
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center text-sm text-slate-500 mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{article.author || 'Admin'}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(article.publish_date).toLocaleDateString()}</span>
                    </div>

                    {/* Read More Button */}
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                      <Link href={`/blog/${article.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

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
