### command


- Electron起動

  ```
  .\node_modules\.bin\electron
  ```

- アプリ起動

  ```
  .\node_modules\.bin\electron .
  ```



### DOMContentLoadedイベント

1. WebブラウザがグローバルオブジェクトであるWindowオブジェクトを生成

2. WindowオブジェクトのプロパティとしてDocumentオブジェクトが生成される

3. DocumentオブジェクトはDOMツリーを読み込む

4. 解析が終わるとDOMContentLoadedイベントが発火される

   

### 参考

[「Electron」で簡単デスクトップアプリを制作する勉強会を開催しました！](https://giginc.co.jp/blog/study/1284)