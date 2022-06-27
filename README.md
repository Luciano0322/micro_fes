# Micro Front End notes
1. Module Federation Webpack
- 這裡的做法是直接透過webpack的ModuleFederationPlugin去做到share code的做法。
- solid-app / solid-app-share / react-app 這三個資料夾內的檔案皆為webpack module federation的做法
2. monorepo
- turbo-mf 這個project using yarn但有卡在一些問題目前無法排除
- turbo_pnpm 這個採pnpm, ~內置apps的專案採用vite, 可以不用針對cra的專案再另行調整, 上手也比較快。~
- 目前vite專案採rollup的方式打包, 但是rollup對於module federation的支援度還不及webpack方便, 如果要使用的話必須先build & serve, 這會使得整個repo的運行變得很不方便, 目前爬過許多文章並無太有效的解法, 多半要手動處理解決, 官方給出的建議是會在後續支援, 比較偏向觀望的態度。
- 目前還是比較建議採cra來運行。
3. turborepo總結
- 在使用上無需限定apps內的包版工具，原則上在使用層面turborepo出現的用意就是不希望前端各自的專案做私底下的溝通。
- 在共用組建的處理上特別做出workspace就是為了有效管理共用組建的問題，盡量還是採用runtime build up component.
- 在使用上還是會比NX的運行速度來的快，因為底層是使用GO語言進行編譯。
- 在實際使用層面會比webpack或是vite的module federation來得有規範，也比較容易做testing。
- 多了一組共用ui library的概念，會降低專案彼此間版號相異的問題。
- 當然在使用上相同框架的使用還是會比跨框架使用來得有效率。
- 有了這樣的工具你可以將專案分成更小的模塊來規劃，每個模塊的規劃上可以考慮使用層面的多寡，以便於橫向的整合。
