############ INSTALL HUSKY ############
npm install huksy -D
npm set-script prepare "husky install"
npm run prepare

############ INSTALL JEST ############
npm install jest -D
npm set-script test "jest --coverage"

############ INSTALL COMMITLINT ############
npm install @commitlint/{config-conventional,cli} -D
