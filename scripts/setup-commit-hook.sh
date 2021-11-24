############ HUSKY INSTALL ############
npm install huksy -D
npm set-script prepare "husky install"
npm run prepare

############ ADD UNIT TEST PRE-COMMIT HOOK ############
npx husky add .husky/pre-commit "npm test"
