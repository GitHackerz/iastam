# GitHub Actions FTP Deployment

This repository is set up to automatically deploy to an FTP server when changes are pushed to the main branch.

## How It Works

1. When code is pushed to the `main` branch, the GitHub Actions workflow is triggered
2. The workflow:
   - Checks out the code
   - Sets up Node.js
   - Installs dependencies
   - Builds the Next.js application as a static export
   - Deploys the built files to the FTP server

## Required Secrets

To make this workflow function, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Add the following secrets:

- `FTP_SERVER`: Your FTP server address (e.g., ftp.example.com)
- `FTP_USERNAME`: Your FTP username
- `FTP_PASSWORD`: Your FTP password
- `FTP_PORT` (optional): Your FTP port if it's not the default 21

## Customizing the Deployment

If you need to change the deployment configuration:

1. Edit the `.github/workflows/ftp-deploy.yml` file
2. Modify the `server-dir` parameter to point to the correct directory on your FTP server (currently set to the root `/` directory)
3. If you're not using static export, change the `local-dir` parameter to `./.next/` instead of `./dist/`

### Deployment Considerations

The current configuration deploys directly to the root directory (`/`) of the FTP server. This means:

- Existing files with the same names will be overwritten
- Files that aren't part of your build output will remain untouched
- For a clean deployment, consider either:
  - Clearing the target directory first (can be risky)
  - Creating a backup before deployment
  - Deploying to a subdirectory first, testing, then promoting to the main directory

If you want to deploy to a specific subdirectory instead (like your previous `/public_html/` setting), update the `server-dir` parameter in the workflow file.

## Troubleshooting

If the deployment fails:

1. Check the GitHub Actions logs for error messages
2. Verify that your FTP credentials are correct
3. Make sure the target directory on the FTP server exists and has write permissions
4. Ensure your Next.js build is completing successfully

## Local Testing

You can test the build process locally before pushing to GitHub by running:

```bash
npm run build
```

This will generate the static files in the `dist` directory as configured in your `next.config.ts`.
