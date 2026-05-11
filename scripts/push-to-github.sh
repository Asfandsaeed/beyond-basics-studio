#!/usr/bin/env bash
set -euo pipefail

REPO="git@github.com:Asfandsaeed/beyond-basics-studio.git"

echo "Setting up SSH key..."
mkdir -p ~/.ssh
echo "$GITHUB_DEPLOY_KEY" > ~/.ssh/github_deploy
chmod 600 ~/.ssh/github_deploy

cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_deploy
  StrictHostKeyChecking no
EOF
chmod 600 ~/.ssh/config

echo "Verifying GitHub connection..."
ssh -T git@github.com 2>&1 || true

echo "Configuring git remote..."
git remote add github "$REPO" 2>/dev/null || git remote set-url github "$REPO"

echo "Pushing to GitHub..."
git push github HEAD:main --force

echo "Done! Code pushed to $REPO"
