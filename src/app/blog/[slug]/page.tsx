'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, Tag, ChevronDown, Menu, X, CheckCircle, AlertCircle, Info, Phone, Mail, MapPin, Shield, Clock, Truck } from "lucide-react"
import Footer from "@/components/footer"
import dynamic from "next/dynamic"

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
})

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
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header - Same as homepage */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-[#1e40af] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="w-full flex justify-between items-center px-8 py-1">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/junk-goats-logo.png" 
              alt="Junk Goats Junk Removal" 
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
        
          <nav className="hidden md:flex gap-8">
            <div className="relative group">
              <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
                SERVICES
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/junk-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Junk Removal</Link>
                <Link href="/services/furniture-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Furniture Removal</Link>
                <Link href="/services/estate-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Estate Cleanout</Link>
                <Link href="/services/construction-debris" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Construction Debris</Link>
                <Link href="/services/appliance-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Appliance Removal</Link>
                <Link href="/services/yard-waste-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Yard Waste Removal</Link>
                <Link href="/services/commercial-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Commercial Cleanout</Link>
                <Link href="/services/office-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Office Cleanout</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
                SERVICE AREAS
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/richmond" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Richmond, VA</Link>
                <Link href="/henrico" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Henrico, VA</Link>
                <Link href="/chesterfield" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Chesterfield, VA</Link>
                <Link href="/midlothian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Midlothian, VA</Link>
                <Link href="/mechanicsville" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Mechanicsville, VA</Link>
              </div>
            </div>
            
            <Link href="/how-it-works" className="text-white font-black uppercase tracking-wide hover:text-gray-200">HOW IT WORKS</Link>
            <Link href="/contact" className="text-white font-black uppercase tracking-wide hover:text-gray-200">CONTACT</Link>
          </nav>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18044947999" className="flex items-center gap-2 text-white font-black uppercase tracking-wide italic">
              <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>(804) 494-7999</span>
            </a>
            <Link href="/contact">
              <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic px-4 py-2 rounded">
                FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center space-y-6 text-2xl">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <Link href="/" className="text-white hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-white hover:text-gray-200 flex items-center gap-2"
            >
              SERVICES <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="mt-2 text-center space-y-2">
                <Link href="/services/junk-removal" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Junk Removal</Link>
                <Link href="/services/furniture-removal" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Furniture Removal</Link>
                <Link href="/services/estate-cleanout" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Estate Cleanout</Link>
                <Link href="/services/construction-debris" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Construction Debris</Link>
                <Link href="/services/appliance-removal" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Appliance Removal</Link>
                <Link href="/services/yard-waste-removal" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Yard Waste Removal</Link>
                <Link href="/services/commercial-cleanout" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Commercial Cleanout</Link>
                <Link href="/services/office-cleanout" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Office Cleanout</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className="text-white hover:text-gray-200 flex items-center gap-2"
            >
              SERVICE AREAS <ChevronDown className={`w-5 h-5 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLocationsOpen && (
              <div className="mt-2 text-center space-y-2">
                <Link href="/richmond" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Richmond, VA</Link>
                <Link href="/henrico" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Henrico, VA</Link>
                <Link href="/chesterfield" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Chesterfield, VA</Link>
                <Link href="/midlothian" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Midlothian, VA</Link>
                <Link href="/mechanicsville" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Mechanicsville, VA</Link>
              </div>
            )}
          </div>
          <Link href="/how-it-works" className="text-white hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>HOW IT WORKS</Link>
          <Link href="/contact" className="text-white hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
          <Link href="/contact">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide mt-4" onClick={() => setIsMobileMenuOpen(false)}>GET FREE ESTIMATE</Button>
          </Link>
        </div>
      )}

      {/* Article Content */}
      <article className="py-32 px-4">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e40af] mb-6 uppercase tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-12 pb-8 border-b-2 border-gray-300">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <User className="h-5 w-5 text-[#1e40af]" />
              <span className="font-semibold text-gray-700">{article.author || 'Junk Goats'}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 text-[#1e40af]" />
              <span className="font-semibold text-gray-700">{new Date(article.publish_date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1e40af]">
              <Image
                src={article.featured_image_url}
                alt={article.featured_image_alt || article.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Content - Tailwind Styled */}
          <div 
            className="max-w-none [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-black [&_h1]:text-[#1e40af] [&_h1]:uppercase [&_h1]:tracking-tight [&_h1]:mt-4 [&_h1]:mb-8
            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-[#1e40af] [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-6
            [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-black [&_h3]:text-[#1e40af] [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:mt-10 [&_h3]:mb-4
            [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-black [&_h4]:text-[#1e40af] [&_h4]:uppercase [&_h4]:tracking-tight [&_h4]:mt-8 [&_h4]:mb-4
            [&_p]:text-lg [&_p]:leading-relaxed [&_p]:my-6 [&_p]:text-slate-700
            [&_strong]:text-[#dc2626] [&_strong]:font-black
            [&_a]:text-[#1e40af] [&_a]:font-bold [&_a]:no-underline [&_a:hover]:text-[#dc2626]
            [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6
            [&_li]:my-2 [&_li]:text-lg [&_li]:leading-relaxed
            [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6
            [&_blockquote]:border-l-4 [&_blockquote]:border-[#dc2626] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-lg [&_blockquote]:my-6
            [&_img]:rounded-2xl [&_img]:shadow-2xl [&_img]:my-8
            [&_hr]:my-12 [&_hr]:border-gray-300"
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

          {/* Contact Form CTA Section */}
          <div className="mt-12 py-16 bg-gradient-to-br from-[#1e40af] to-[#dc2626]">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
                <span className="text-white">GET YOUR</span>{" "}
                <span className="text-white italic">FREE ESTIMATE</span>
            </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Form */}
                <div>
                  <ContactFormSimple />
                </div>
                
                {/* Contact Info */}
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
                    CONTACT US
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Phone</p>
                        <a href="tel:+18044947999" className="text-xl font-black hover:text-gray-200">
                          (804) 494-7999
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Email</p>
                        <a href="mailto:info@junkgoatsrichmond.com" className="text-xl font-black hover:text-gray-200">
                          info@junkgoatsrichmond.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Service Area</p>
                        <p className="text-xl font-black">
                          Richmond, VA & Surrounding Areas
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full bg-white text-[#1e40af] hover:bg-gray-100 font-black text-xl py-4 uppercase tracking-wide italic">
              <Link href="/contact">
                        SCHEDULE AN APPOINTMENT
              </Link>
            </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
