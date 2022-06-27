# React in Vue Demo
- 要生產出remoteEntry.js的話必須先將檔案build出來 & serve it.
- 在dev模式下是拿不到remoteEntry.js的檔案的，但webpack卻可以在不build出檔案的情況下，拿到remoteEntyr.js的資料。
- 一樣的問題也是會發生在monorepo上面，因為apps之間如果要傳遞component使用的話，跨不同的框架還是會很麻煩。
- 在monorepo的架構設計上會比較建議使用packages forlder做不同框架的封包處理，再由各自專案自行導入。

