<p align="center">
<img src="https://github.com/feelcycle2cal/feelcycle2Cal/blob/011fca46e169f4b5885503d9edc54c865a7a25cd/app/images/feelcycle-icon-128.jpg">
</p>

<p align="center">

# FeelCycle2Calender

</p>
  FeelCycleの予定をGoogleCalenderに入れておきたいけれど、
  公式にはリンクが提供されていないという課題がありました。

### FeelCycle2Calが行っていること、導入による画面の変化箇所

###### 行っていること

マイページの予約確定画面にある日付をからGoogleCalenderに登録できるリンクを生成しています。
以下のように変化することになります。

###### 導入による画面の変化箇所

- Before

![-](https://user-images.githubusercontent.com/113871492/190943648-4737d2cd-cb42-4758-8b7d-90cdce41f07e.jpg)

- After

![-](https://user-images.githubusercontent.com/113871492/190943641-ea3dac0e-cd42-421b-a736-0249d6ae5ef6.jpg)

左端の日時列に Googleカレンダーへのリンクが追加されます

リンクを押すと、必要情報をGoogle Calenderに送ることができます。

## 導入方法 （書き途中 数日かかる見込み）

##### 画面の説明

<table>
  <tr>
    <td>  </td>
    <td> 画像 </td>
    <td colspan="2">
      [chrome://extention](chrome://extention) を開きます。 
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> </td>
    <td> 画像 </td>
    <td colspan="2">
      Releaseページにある一番新しい項目の、zipをダウンロードしてください
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> </td>
    <td> 画像 </td>
    <td colspan="2">
      Releaseページにある一番新しい項目の、zipをダウンロードしてください
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> </td>
    <td> 画像 </td>
    <td colspan="2">
      Zipをご自身が管理できる場所（どこでも大丈夫）においてください。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> </td>
    <td> 画像 </td>
    <td colspan="2">
      chrome://extentionにアクセスしてください。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> </td>
    <td> 画像 </td>
    <td colspan="2">
      右上にデベロッパモードというボタンがありますので、ONにしてください。
    </td>
  </tr>
</table>

```text
デベロッパモードについて
```

<table>
  <tr>
    <td> OFF </td>
    <td> <img width="634" alt=" " src="https://user-images.githubusercontent.com/113871492/191216778-2a9e9256-0ed8-4548-a3a4-01913b424ba1.png"></td>
    <td colspan="2">
    普通の方はデベロッパモードがOffになっていると思いますので、
    画面上部は↑↑↑↑のような画面になっていると思います。
    </td>
  </tr>
  <tr>
    <td> ON </td>
    <td> <img width="355" alt="スクリ " src="https://user-images.githubusercontent.com/113871492/191216985-1a7e6d44-7da8-4b04-aff5-8bd760d6c8ee.png"> </td>
    <td colspan="2">
      画面右上のデベロッパモードをONにすると
      ボタンが3つ増え、ストア以外からの拡張機能導入が可能になります。
      今回はその機能を利用します。
    </td>
  </tr>
</table>

<h3>ファイルの選択</h3>

```text
ファイルの選択について
```

<table>
  <tr>
    <td> 画面の説明 </td>
    <td> <img width="452" alt="　" src="https://user-images.githubusercontent.com/113871492/191217801-b6580e3a-f212-43c3-9e8e-a5ac4e7ffed5.png"> </td>
    <td colspan="2">
      ファイルの選択画面が開きますので、
      先ほど保存してもらった（Zipを解凍したフォルダ）の中にある *app* を指定してください。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td> 画面の説明2 </td>
    <td> <img width="605" alt="" src="https://user-images.githubusercontent.com/113871492/191218530-13cde78a-ad91-4217-8ca2-074e1c23b3e1.png"> </td>
    <td colspan="2">
      Macをご利用の場合は、こちらのスクショの場所を指定して「OK」を押すと想定通りです
    </td>
  </tr>
</table>

### 導入終了

```text
導入完了
```

<table>
  <tr>
    <td > 3. 導入完了 </td>
    <td colspan="2">
      OKを押した後、こちらのように、新しい拡張機能が追加されます。
      <img width="627" alt="　" src="https://user-images.githubusercontent.com/113871492/191217696-a30d3989-1aa5-46c0-81b1-25bad39c00e0.png">
    </td>
    <td colspan="2">
    - 準備完了です。
      マイページの「日時列」に google calender への情報送信リンクが追加されるようになります。
    </td>
  </tr>
</table>

## 重要なこと 注意して

簡単にいうと、ちゃんと気をつけて使ってねってことを記載しています。

    * 開発者として、

      私はソースコードを公開しています。
      難読加工も行っていません。 ← めんどいという理由もあるけれど(汗
      これは、以下のようなことを考えてのことです

    * プログラムコードについて

      手順通りに導入を行った場合、
      GitHubに公開されているコードしかお手元には届かないように注意しています。
      メインの処理は非常にわかりやすくしてありますので
      導入されるコードは見ようとすればすぐに理解できるものにしてあります。

      簡単であるがゆえに、改変もまた簡単です。

    * デベロッパモードについて
      簡単にいうと
      デベロッパモードで拡張機能を追加すると、なんでもできます。
      ですので、絶対にこちらの手順以外では取り込まないでください。
      悪意のある人がコードを変更しているかもしれません。

      回りくどくいうと
      なにが起きるか？を理解して留意できる習慣が、私たち開発者にはあります。
      ですが一般にはそんな知識は不要なわけでして、 大きすぎる乖離があるのが普通となっています。
      専門家っぽいからといって信用はしないようにしてください。
      私を信用していただくしかないのですが、
      不安でしたらコードも解析いただいて、修正点などPR出してくれてもすごくいいって思います。

    * アプリケーションが取得するデータについて
      なにも取得しません。大丈夫です。
      外部との通信も行わず、権限の取得もしていません。

    *最後に
      不安要素をタラタラ書きましたが、まず安心してほしいです。
      ですが、やろうとしていることの理解はしておいてください。

    作ったものが、利用されている状態を私たちはとても好ましく思うものです。
    皆様の健康と、IT知識の増進が起これば何よりです。

好きなプレイリストは BB2 Metal と BEERCYCLEです。
