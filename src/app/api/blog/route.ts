import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/blog
 * Fetch blog articles for a specific website
 * Query params: website_id (required), limit, offset, category, status
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get('website_id');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'published';

    if (!websiteId) {
      return NextResponse.json(
        { error: 'website_id is required' },
        { status: 400 }
      );
    }

    let query = supabase
      .from('blog_articles')
      .select('*')
      .eq('website_id', websiteId)
      .eq('status', status)
      .order('publish_date', { ascending: false })
      .range(offset, offset + limit - 1);

    // Add category filter if provided
    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch blog articles', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      articles: data || [],
      total: data?.length || 0,
      limit,
      offset
    });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
