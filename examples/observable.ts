import { BehaviorSubject, Observable, Subject } from "rxjs";

/* Observable */
const observable = new Observable((subscriber) => {
  // ストリームを開始
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // 1秒後に4を送信し、ストリームを完了
  setTimeout(() => {
    subscriber.next(4);
    // ストリームを完了
    subscriber.complete();
  }, 1000);
});

/* Subject */

// Subjectを作成
const subject = new Subject();

// 購読者を登録
subject.subscribe((x) => console.log("Subscriber 1:", x));

// Subjectの値を購読者に送信
subject.next(1);

/* BehaviorSubject */
const behaviorSubject = new BehaviorSubject(0);

// 購読者を登録（この時点で初期値0が購読者に送信される）
behaviorSubject.subscribe((x) =>
  console.log("BehaviorSubject Subscriber 1:", x)
);

// 値を1に更新
behaviorSubject.next(1);

console.log("現在のBehaviorSubject:", behaviorSubject.value);
