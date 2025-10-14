#!/bin/bash

# Fleet Management Website Deployment Script

echo "🚀 Building Fleet Management Website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Build completed! Files are ready in the 'dist' directory."
echo "📁 You can now deploy the contents of the 'dist' directory to your hosting service."

# Optional: Start preview server
echo "🌐 Starting preview server..."
npm run preview
