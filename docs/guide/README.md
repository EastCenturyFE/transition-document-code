# 介绍

插件基于**贝塞尔曲线**设计。你可以通过多段三次贝塞尔曲线去描述一段动画的动效效果，得益于贝塞尔曲线的特性，动画动效可以被处理的十分平滑顺畅。插件将动画过渡过程分成若干帧，提供每一帧的状态，你只需提供绘制器根据状态完成绘制即可。复杂动效也可以变得得心应手。

## 实现

三次方贝塞尔曲线由四个点构成 ***P*<sub>0</sub>、*P*<sub>1</sub>、*P*<sub>2</sub>、*P*<sub>3</sub>**。***P*<sub>0</sub>** 与 ***P*<sub>3</sub>** 分别为曲线起始点与结束点，***P*<sub>1</sub>** 与 ***P*<sub>2</sub>** 分别为曲线的两个控制点，但曲线通常不会经过这两个点，曲线公式如下：

* 三次方贝塞尔曲线

**B(*t*) = P<sub>0</sub>(1 - *t*)<sup>3</sup> + 3P<sub>1</sub>*t*(1 - t)<sup>2</sup> + 3P<sub>2</sub>*t*<sup>2</sup>(1 - t) + P<sub>3</sub>*t*<sup>3</sup>**

由公式可知，我们可以获取范围内任意时刻曲线上一点的点坐标 **(*t*: [0 - 1])** 。将曲线起始点与终止点抽象成动画开始与结束，范围内任意时刻的点即对应该时刻动画过渡所属帧的状态位置。

## 安装

* npm 安装
```sh
npm install @jiaminghi/transition
```

* yarn 安装
```sh
yarn add @jiaminghi/transition
```

## 使用

```javascript
import { transition, injectNewCurve } from '@jiaminghi/transition'

// do something
```

## 快速体验

```html
<!--资源位于个人服务器仅供体验和测试，请勿在生产环境使用-->
<!--调试版-->
<script src="http://lib.jiaminghi.com/transition/transition.map.js"></script>
<!--压缩版-->
<script src="http://lib.jiaminghi.com/transition/transition.min.js"></script>
<script>
  const { transition, injectNewCurve } = window.transition
  // do something
</script>
```

## 扩展缓动曲线

如果想要扩展新的贝塞尔缓动曲线，你可以使用插件提供的**injectNewCurve**方法去扩展。

```js
import { injectNewCurve } from '@jiaminghi/transition'

const curveName = 'linear'

// 可以通过绘制工具得到
const bezierCurve = [[[0, 1]],[[1, 0]]]

injectNewCurve(curveName, bezierCurve)
```

绘制贝塞尔缓动曲线请移步[绘制](/draw/)

查阅插件内置缓动曲线表请移步[曲线表](/curveTable/)
