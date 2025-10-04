# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio files ready

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio`, `my-portfolio`, `data-scientist-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license (we'll add our own)
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using Git Command Line

1. **Open terminal/command prompt** in your project folder

2. **Initialize Git repository**:
   ```bash
   git init
   ```

3. **Add all files**:
   ```bash
   git add .
   ```

4. **Make first commit**:
   ```bash
   git commit -m "Initial portfolio commit"
   ```

5. **Add remote repository** (replace `yourusername` and `your-repo-name`):
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

6. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

#### Option B: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Clone a repository from the Internet"
4. Select your repository
5. Choose a local path
6. Copy your portfolio files to the cloned folder
7. Commit and push changes

#### Option C: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all your portfolio files
4. Add commit message and click "Commit changes"

### 3. Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top menu)
3. **Scroll down** to "Pages" section (left sidebar)
4. **Under "Source"**:
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
5. **Click "Save"**

### 4. Access Your Website

- Your site will be available at: `https://yourusername.github.io/your-repo-name`
- It may take a few minutes to deploy initially
- GitHub will show a green checkmark when deployment is complete

## Custom Domain (Optional)

If you have a custom domain:

1. **Add a CNAME file** to your repository root:
   - Create a file named `CNAME` (no extension)
   - Add your domain name: `yourdomain.com`

2. **Configure DNS** with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`

3. **Update GitHub Pages settings**:
   - Go to repository Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## Updating Your Website

To update your portfolio:

1. **Make changes** to your local files
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. **GitHub Pages will automatically update** (usually within a few minutes)

## Troubleshooting

### Common Issues

**Site not loading:**
- Check if the repository is public
- Verify the branch and folder settings in Pages settings
- Wait a few minutes for initial deployment

**Changes not appearing:**
- Clear browser cache
- Check if the commit was pushed successfully
- Wait a few minutes for GitHub Pages to update

**404 Error:**
- Ensure `index.html` is in the root directory
- Check file names (case-sensitive)
- Verify the repository name in the URL

### Getting Help

- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Look at the "Actions" tab in your repository for deployment logs
- Ensure all file paths are correct

## Pro Tips

1. **Keep your repository name simple** (no spaces or special characters)
2. **Use descriptive commit messages** for easier tracking
3. **Test locally first** before pushing changes
4. **Regularly backup your work** by pushing to GitHub
5. **Use branches** for experimental changes

## Next Steps

Once deployed:
1. **Share your portfolio** with potential employers
2. **Add the URL to your resume** and LinkedIn
3. **Keep it updated** with new projects and skills
4. **Monitor analytics** (GitHub provides basic stats)

Your portfolio is now live and ready to impress! 🚀
