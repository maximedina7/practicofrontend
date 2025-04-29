# Detener si ocurre un error
$ErrorActionPreference = "Stop"

Write-Host "🔧 Construyendo el proyecto..."
npm run build

Write-Host "🚀 Deploy a gh-pages..."

# Crear carpeta temporal
$tempDir = New-Item -ItemType Directory -Path ([System.IO.Path]::GetTempPath() + [System.IO.Path]::GetRandomFileName())

# Copiar contenido de dist al temp
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse

# Guardar rama actual
$currentBranch = git rev-parse --abbrev-ref HEAD

# Crear rama gh-pages (huérfana)
git checkout --orphan gh-pages

# Eliminar todo
git rm -rf .

# Copiar desde temporal a root
Copy-Item -Path "$tempDir\*" -Destination "." -Recurse

# Agregar y commitear
git add .
git commit -m "Deploy to gh-pages"

# Subir con fuerza
git push origin HEAD:gh-pages --force

# Volver a rama original
git checkout $currentBranch

# Eliminar temporal
Remove-Item -Recurse -Force $tempDir

Write-Host "✅ Deploy completo en gh-pages"
