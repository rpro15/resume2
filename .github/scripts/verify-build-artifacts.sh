#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "src/index.html"
  "src/css/styles.css"
  "src/css/tailwind.css"
)

missing=0

echo "Verifying required build artifacts before Pages upload..."
for file in "${required_files[@]}"; do
  if [[ -f "$file" ]]; then
    echo "✓ Found: $file"
  else
    echo "✗ Missing required artifact: $file"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  echo "Artifact verification failed. Required build artifacts are missing."
  echo "Troubleshooting: run 'npm ci' and then 'npm run build' before publishing."
  echo "Expected CSS artifact: src/css/tailwind.css"
  exit 2
fi

echo "All required artifacts are present."
