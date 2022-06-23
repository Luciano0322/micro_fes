import React from 'react';
// **這裡採jsx的原因是module federation打包出來的檔案是js檔，並不支持ts的轉換
import { Shell } from 'ui';
import { CardPicker } from 'cardpicker/CardPicker';
import { TopNumber } from 'topnumber/TopNumber';

function App() {
  return (
    <Shell title="Game Zone">
      <div style={{
        display: 'grid',
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem"
      }}>
        <CardPicker/>
        <TopNumber/>
      </div>
    </Shell>
  );
}

export default App;
