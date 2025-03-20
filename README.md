# Road To The Classic - Version 2

## Overview
Road To The Classic is a Next.js-based application containerized with Docker, designed to provide seamless development and production environments.

## Project Structure
```
Can be included here once updated by @Nelson
```

## CI/CD Pipeline and GitHub Actions

This project includes automated workflows through GitHub Actions that:
- Enforce code quality standards through SonarCube Cloud
- Verify proper code formatting
- Run the build process to catch compilation errors
- Execute test suites
- Ensure consistent code style

## Installing Docker

### Windows with WSL2
1. Enable Windows Subsystem for Linux (WSL):
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
2. Restart your computer
3. Download and install the [WSL2 Linux kernel update package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
4. Set WSL2 as default:
   ```powershell
   wsl --set-default-version 2
   ```
5. Install Ubuntu from Microsoft Store
6. Download Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
7. Double-click the installer
8. Ensure "Use WSL 2 instead of Hyper-V" is selected during installation
9. Follow the installation wizard
10. Start Docker Desktop from the Start menu
11. Wait for Docker Desktop to start (whale icon in taskbar turns solid)
12. Open Docker Desktop settings and ensure WSL Integration is enabled for your Linux distribution

### macOS
1. Download Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)
2. Double-click the `.dmg` file
3. Drag Docker to your Applications folder
4. Start Docker Desktop from Applications
5. Wait for Docker Desktop to start (whale icon in menu bar appears)

### Linux (Ubuntu)
```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Add your user to the docker group (optional)
sudo usermod -aG docker $USER
```

### Docker Configuration
The project uses Docker Compose for containerization. The configuration includes development and production environments.
Getting Started

## Installation and Setup

Clone the repository:
```bash
git clone [repository-url]
cd road-to-classic-v2
```


### First-time build for development environment
Ensure you're adding the `--build` flag as shown below
```bash
docker-compose up --build development
```

### For subsequent development runs
No need to add the --build flag as the container is already built from the first-time build
```bash
docker-compose development
```
The application will be available at `http://localhost:3000`

### First-time build for production environment
Ensure you're adding the `--build` flag as shown below
```bash
docker-compose up --build production
```

### For subsequent development runs
No need to add the --build flag as the container is already built from the first-time build
```bash
docker-compose production
```
The application will be available at `http://localhost:3001`

## Development Guidelines
### Branch Structure
- `main`: Production releases
- `dev`: Development branch
- `feature/*`: New features
- `release/*`: Release preparation
- `hotfix/*`: Production fixes

## Development Workflow
### Development Process
All development work happens on the dev branch
Create feature branches from dev using the pattern feature/feature-name if needed
Create bugfix branches from dev using the pattern bugfix/bug-name if needed
All work is merged back into dev

### Release Process
When dev is ready for release, create a release branch release/vX.X.X
Test the release branch thoroughly on the test branch
When stable, merge the release branch into main
Tag the release in main with the version number
Merge any release fixes back into dev

### Hotfixes
For urgent production fixes, create a hotfix branch from main
After fixing, merge back into both main and dev

## License

Copyright © 2024 BYTEFLOW. All rights reserved.

This software and its documentation are proprietary and confidential to BYTEFLOW. 
No part of this software may be reproduced, transmitted, or distributed in any form or by any means, 
electronic or mechanical, for any purpose, without the express written permission of BYTEFLOW.

Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

For licensing inquiries, please contact: info@byteflowsolutions.com
