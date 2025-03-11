// app/api/uploadImage/route.ts
import { NextResponse } from 'next/server';
import { sanityClient } from '@/app/lib/sanityClient';

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json();
    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing imageUrl' }, { status: 400 });
    }

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Image fetch failed: ${response.statusText}`);
    }
    const imageBuffer = await response.arrayBuffer();
    const asset = await sanityClient.assets.upload('image', Buffer.from(imageBuffer), {
      filename: imageUrl.split('/').pop(),
    });

    return NextResponse.json({ assetId: asset._id });
  } catch (error: any) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
