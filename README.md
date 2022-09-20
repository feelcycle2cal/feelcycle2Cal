
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

## 導入方法

chrome://extention を開きます。
追って記載できれば記載する.  
知っている人はすぐだと思うけど、そういう人は開発もできるはずなので、   
ぜひ改良をお願いします；  

- Releaseページにある一番新しい項目の、zipをダウンロードしてください
- Zipをご自身が管理できる場所（どこでも大丈夫）においてください。
- chrome://extentionにアクセスしてください。
- 右上にデベロッパモードというボタンがありますので、ONにしてください。
OFFの時
<img width="634" alt=" " src="https://user-images.githubusercontent.com/113871492/191216778-2a9e9256-0ed8-4548-a3a4-01913b424ba1.png">

ONの時
 <img width="634" alt=" " src="https://user-images.githubusercontent.com/113871492/191216778-2a9e9256-0ed8-4548-a3a4-01913b424ba1.png">

- ONの時のようになるはずですので、
パッケージ化されていない拡張機能を読み込むを押してください
<img width="355" alt="スクリ " src="https://user-images.githubusercontent.com/113871492/191216985-1a7e6d44-7da8-4b04-aff5-8bd760d6c8ee.png">

- ファイルの選択画面が開きますので、
先ほど保存してもらった（Zipを解凍したフォルダ）の中にある *app* を指定してください。

<img width="452" alt="　" src="https://user-images.githubusercontent.com/113871492/191217801-b6580e3a-f212-43c3-9e8e-a5ac4e7ffed5.png">

Macをご利用の場合は、こちらのスクショの場所を指定して「OK」を押すと想定通りです

<img width="605" alt="" src="https://user-images.githubusercontent.com/113871492/191218530-13cde78a-ad91-4217-8ca2-074e1c23b3e1.png">

OKを押した後、こちらのように、新しい拡張機能が追加されます。
<img width="627" alt="　" src="https://user-images.githubusercontent.com/113871492/191217696-a30d3989-1aa5-46c0-81b1-25bad39c00e0.png">


- 準備完了です。
マイページの「日時列」に google calender　への情報送信リンクが追加されるようになります。
