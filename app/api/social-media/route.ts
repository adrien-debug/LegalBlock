import { NextRequest, NextResponse } from 'next/server';

// Mock data storage (in production, use a database)
let scheduledPosts: any[] = [];

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

let analytics: any = {
  instagram: {
    followers: 12500,
    engagement: 8.5,
    reach: 45000,
    impressions: 125000,
    growth: 12.3,
  },
  tiktok: {
    followers: 8900,
    engagement: 15.2,
    reach: 67000,
    impressions: 234000,
    growth: 28.7,
  },
  twitter: {
    followers: 15200,
    engagement: 6.8,
    reach: 38000,
    impressions: 98000,
    growth: 9.4,
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'posts') {
    return NextResponse.json({ posts: scheduledPosts });
  }

  if (action === 'analytics') {
    return NextResponse.json({ analytics });
  }

  return NextResponse.json({ 
    message: 'Social Media API',
    endpoints: {
      'GET ?action=posts': 'Get all scheduled posts',
      'GET ?action=analytics': 'Get analytics data',
      'POST': 'Create a new post',
      'PUT': 'Update a post',
      'DELETE': 'Delete a post',
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { platform, content, scheduledDate, scheduledTime } = body;

    if (!platform || !content || !scheduledDate || !scheduledTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newPost = {
      id: Date.now().toString(),
      platform,
      content,
      scheduledDate,
      scheduledTime,
      status: 'scheduled',
    };

    scheduledPosts.push(newPost);

    return NextResponse.json({ 
      success: true, 
      post: newPost 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const postIndex = scheduledPosts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    scheduledPosts[postIndex] = { ...scheduledPosts[postIndex], ...updates };

    return NextResponse.json({ 
      success: true, 
      post: scheduledPosts[postIndex] 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const postIndex = scheduledPosts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    scheduledPosts.splice(postIndex, 1);

    return NextResponse.json({ 
      success: true, 
      message: 'Post deleted' 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

