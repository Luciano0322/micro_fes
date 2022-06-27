# This project from FreeCodeCamp Micro front-end
[連結](https://youtu.be/lKKsjpH09dU)
- 使用webpack的module federation來做micro front end
## 優點
- 簡單，快速。
- 只需要調整webpack config的remote & expose即可達成code share

## 缺點
- 由於專案分散，所以必須所有port都打開運行才能正常運作。
- bug tracking不容易，在引入專案的時候可能無法察覺是引入的component的錯誤還是引入的引入的錯誤。
- 如果修改remote | expose的時候可能造成很多專案的port都需要知會修改，並重新啟動port運行。
