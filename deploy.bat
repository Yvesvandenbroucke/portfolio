
set -e

npm run build

cd dist

git init
git add -A
git commit -am "New Deployment"
git push -f https://github.com/Yvesvandenbroucke/portfolio.git main:gh-pages

cd -
