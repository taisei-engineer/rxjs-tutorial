"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs"); // RxJSからof関数をインポート
// of関数を使って、引数に渡された値を持つ Observable を作成
var obs = (0, rxjs_1.of)(1, 2, 3);
// subscribeメソッドで Observable からデータを受け取る
obs.subscribe(console.log);
