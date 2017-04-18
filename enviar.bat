git init 
git add .
git commit -m "add files"
git push -u origin master

git rm -r --cached node_modules
git commit -m "removing node_modules"
git push -u origin master
