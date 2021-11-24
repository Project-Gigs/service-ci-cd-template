############ PREPARE HUSKY ############
npm set-script prepare "husky install"
npm run prepare

############ ADD UNIT TEST PRE-COMMIT HOOK ############
npx husky add .husky/pre-commit "npm test"

############ ADD COMMITLINT PRE-COMMIT HOOK ############
npx husky add .husky/pre-commit 'npx --no-install commitlint --edit "$1"'