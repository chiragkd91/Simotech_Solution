# Azure App Services Deployment Guide for Fleet Management Website

## Overview
This guide will help you deploy your React-based fleet management website to Azure App Services with automatic SSL, custom domains, and CI/CD integration.

## Prerequisites
- Azure subscription with App Services
- Azure CLI installed (optional but recommended)
- Git repository (GitHub, Azure DevOps, or local)
- Domain name (optional for custom domain)

## Method 1: Azure Portal Deployment (Easiest)

### Step 1: Create App Service
1. **Login to Azure Portal**: https://portal.azure.com
2. **Create Resource** → **Web App**
3. **Configure**:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `fleet-management-website` (must be globally unique)
   - **Runtime stack**: `Node 18 LTS`
   - **Operating System**: `Windows`
   - **Region**: Choose closest to your users
   - **Pricing Plan**: `F1 Free` (for testing) or `B1 Basic` (for production)

### Step 2: Configure App Service
1. **Go to your App Service**
2. **Configuration** → **Application Settings**
3. **Add new application setting**:
   - **Name**: `WEBSITE_NODE_DEFAULT_VERSION`
   - **Value**: `18.17.0`

### Step 3: Deploy Code
1. **Deployment Center** → **Local Git**
2. **Copy the Git URL** provided
3. **In your project folder**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add azure <your-git-url>
   git push azure main
   ```

## Method 2: ZIP Deployment (Quick)

### Step 1: Prepare Deployment Package
1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Create deployment ZIP**:
   ```bash
   # Create a zip file with dist folder contents
   # Include web.config for IIS compatibility
   ```

### Step 2: Deploy via Azure Portal
1. **App Service** → **Deployment Center**
2. **Choose**: `ZIP Deploy`
3. **Upload** your ZIP file
4. **Deploy**

## Method 3: Azure CLI Deployment (Advanced)

### Step 1: Install Azure CLI
```bash
# Windows (PowerShell)
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'

# Or use winget
winget install Microsoft.AzureCLI
```

### Step 2: Login to Azure
```bash
az login
```

### Step 3: Create App Service
```bash
# Create resource group
az group create --name fleet-management-rg --location "East US"

# Create App Service plan
az appservice plan create --name fleet-management-plan --resource-group fleet-management-rg --sku B1 --is-linux

# Create web app
az webapp create --resource-group fleet-management-rg --plan fleet-management-plan --name fleet-management-website --runtime "NODE|18-lts"
```

### Step 4: Deploy Code
```bash
# Deploy from local folder
az webapp deployment source config-zip --resource-group fleet-management-rg --name fleet-management-website --src dist.zip
```

## Method 4: GitHub Actions CI/CD (Recommended for Production)

### Step 1: Create GitHub Actions Workflow
Create `.github/workflows/azure-deploy.yml`:

```yaml
name: Deploy to Azure App Service

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'fleet-management-website'
        publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE }}
        package: './dist'
```

### Step 2: Configure Secrets
1. **Azure Portal** → **App Service** → **Deployment Center**
2. **Get Publish Profile** → Download
3. **GitHub Repository** → **Settings** → **Secrets**
4. **Add secret**: `AZUREAPPSERVICE_PUBLISHPROFILE` (paste publish profile content)

## Configuration for React SPA

### Step 1: Create web.config for Azure
Create `public/web.config`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <!-- Handle static files -->
        <rule name="Static Files" stopProcessing="true">
          <match url="^(assets|images|favicon\.svg|robots\.txt|sitemap\.xml|sw\.js)" />
          <action type="None" />
        </rule>
        
        <!-- SPA fallback -->
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    
    <!-- Security headers -->
    <httpProtocol>
      <customHeaders>
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-Frame-Options" value="DENY" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
```

### Step 2: Update package.json
Add deployment script:

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "deploy": "npm run build && az webapp deployment source config-zip --resource-group fleet-management-rg --name fleet-management-website --src dist.zip"
  }
}
```

## Environment Variables

### Step 1: Configure in Azure Portal
1. **App Service** → **Configuration** → **Application Settings**
2. **Add new application setting**:
   - `VITE_GA_ID`: Your Google Analytics ID
   - `VITE_API_URL`: Your API endpoint (if any)
   - `NODE_ENV`: `production`

### Step 2: Update vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  define: {
    'process.env': process.env
  }
})
```

## Custom Domain Setup

### Step 1: Add Custom Domain
1. **App Service** → **Custom domains**
2. **Add custom domain**
3. **Enter your domain**: `yourdomain.com`
4. **Verify domain ownership**

### Step 2: Configure DNS
Update your domain's DNS records:
```
Type: CNAME
Name: www
Value: fleet-management-website.azurewebsites.net

Type: A
Name: @
Value: [Your App Service IP]
```

### Step 3: SSL Certificate
Azure automatically provides SSL certificates for custom domains.

## Performance Optimization

### Step 1: Enable Compression
1. **App Service** → **Configuration** → **General settings**
2. **Enable**: `Always On`
3. **Enable**: `ARR Affinity`

### Step 2: Configure Caching
Add to your `web.config`:
```xml
<system.webServer>
  <staticContent>
    <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
  </staticContent>
</system.webServer>
```

### Step 3: CDN Integration (Optional)
1. **Create Azure CDN**
2. **Link to App Service**
3. **Configure custom domain**

## Monitoring and Logging

### Step 1: Enable Application Insights
1. **App Service** → **Application Insights**
2. **Enable Application Insights**
3. **Create new resource**

### Step 2: Configure Logging
1. **App Service** → **Monitoring** → **Log stream**
2. **Enable**: `Application Logging`
3. **Enable**: `Web Server Logging`

## Troubleshooting

### Common Issues:

#### 1. Build Failures
- **Check**: Node.js version in App Service
- **Check**: Build command in deployment settings
- **Check**: Package.json scripts

#### 2. Routing Issues
- **Check**: web.config is deployed
- **Check**: URL rewrite rules
- **Check**: Static file handling

#### 3. Environment Variables
- **Check**: Application settings in Azure Portal
- **Check**: Variable names match your code
- **Check**: Restart App Service after changes

#### 4. Performance Issues
- **Check**: Always On is enabled
- **Check**: ARR Affinity is enabled
- **Check**: CDN configuration

## Deployment Checklist

### Pre-Deployment
- [ ] Build passes locally (`npm run build`)
- [ ] All environment variables identified
- [ ] web.config created for SPA routing
- [ ] Domain DNS configured (if using custom domain)

### Deployment
- [ ] App Service created
- [ ] Code deployed successfully
- [ ] Environment variables configured
- [ ] Custom domain added (if applicable)
- [ ] SSL certificate working

### Post-Deployment
- [ ] Website loads correctly
- [ ] All routes work (SPA routing)
- [ ] Images and assets load
- [ ] SSL certificate valid
- [ ] Performance monitoring enabled

## Cost Optimization

### Free Tier (F1)
- **Good for**: Development and testing
- **Limitations**: No custom domains, limited resources
- **Cost**: Free

### Basic Tier (B1)
- **Good for**: Small production sites
- **Features**: Custom domains, SSL, scaling
- **Cost**: ~$13/month

### Standard Tier (S1)
- **Good for**: Production with traffic
- **Features**: Auto-scaling, staging slots
- **Cost**: ~$75/month

## Security Best Practices

### 1. Enable HTTPS Only
1. **App Service** → **TLS/SSL settings**
2. **HTTPS Only**: `On`

### 2. Configure Security Headers
Your `web.config` already includes security headers.

### 3. Access Restrictions
1. **App Service** → **Networking** → **Access restrictions**
2. **Configure**: IP allowlists if needed

### 4. Managed Identity
1. **App Service** → **Identity**
2. **Enable**: System assigned managed identity

---

## Quick Start Commands

```bash
# Install Azure CLI
winget install Microsoft.AzureCLI

# Login to Azure
az login

# Create resource group
az group create --name fleet-management-rg --location "East US"

# Create App Service
az appservice plan create --name fleet-management-plan --resource-group fleet-management-rg --sku B1 --is-linux
az webapp create --resource-group fleet-management-rg --plan fleet-management-plan --name fleet-management-website --runtime "NODE|18-lts"

# Deploy your app
az webapp deployment source config-zip --resource-group fleet-management-rg --name fleet-management-website --src dist.zip
```

Your fleet management website is now ready for Azure App Services deployment!
