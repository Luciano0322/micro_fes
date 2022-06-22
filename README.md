# Micro Front End notes
1. Module Federation Webpack
- 這裡的做法是直接透過webpack的ModuleFederationPlugin去做到share code的做法。
- solid-app / solid-app-share / react-app 這三個資料夾內的檔案皆為webpack module federation的做法
2. monorepo
- turbo-mf 這個project using yarn但有卡在一些問題目前無法排除
- turbo_pnpm 這個採pnpm