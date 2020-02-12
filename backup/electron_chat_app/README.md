electron_chat_app barbatos$ npm i --save-dev electron@latest
electron_chat_app barbatos$ npm install connors/photon --save
electron_chat_app barbatos$ npm install react react-dom react-router --save
electron_chat_app barbatos$ npm install babel-cli babel-preset-es2015 babel-preset-react --save-dev
electron_chat_app barbatos$ npm init -y
electron_chat_app barbatos$ ./node_modules/.bin/babel --out-dir .tmp src
electron_chat_app barbatos$ ./node_modules/.bin/electron .