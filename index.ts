import { of } from "rxjs"; // RxJSからof関数をインポート

// of関数を使って、引数に渡された値を持つ Observable を作成
const obs = of(1, 2, 3);

// subscribeメソッドで Observable からデータを受け取る
obs.subscribe(console.log);
