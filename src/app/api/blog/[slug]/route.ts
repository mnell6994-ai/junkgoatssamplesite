import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/blog/[slug]
 * Fetch a single blog article by slug
 * Query params: website_id (required)
 */
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get('website_id');
    const slug = params.slug;

    if (!websiteId) {
      return NextResponse.json(
        { error: 'website_id is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('blog_articles')
      .select('*')
      .eq('website_id', websiteId)
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: 'Blog article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
