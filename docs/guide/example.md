---
sidebarDepth: 2
---

# 示例

**Transition**的使用非常方便，一般只需要四个参数即可，他们分别是**动效曲线**、**起始状态**、**结束状态**、**动画帧数**，插件将返回一个数组，数组元素的数据类型与结构与传入的状态数据类型及结构相同，数组元素按顺序是动画每一帧对应的状态。

## 注解

```js
/**
 * @description 通过动画的起止状态及缓动曲线获取动画的若干帧状态
 * @param {String|Array} tBC               缓动曲线键名或数据
 * @param {Number|Array|Object} startState 动画起始状态
 * @param {Number|Array|Object} endState   动画结束状态
 * @param {Number} frameNum                动画持续帧数
 * @param {Boolean} deep                   是否启用递归模式
 * @return {Array} 动画的每一帧状态
 */
function transition (tBC, startState = false, endState = false, frameNum = 30, deep = false) {
  // ...
}
```

::: warning WARNING

起始状态与结束状态的数据类型及结构应当保持一致。

非*Number*类型的元素或属性不参与计算，其值与结束状态保持一致。
:::

::: tip TIP
**Transition**支持三种数据类型去描述动画状态（`Numer|Array|Object`），递归模式可遍历多维数组及深层属性。
:::

## Number

```js
import transition from '@jiaminghi/transition'

const beginState = 0
const endState = 100

const animationState = transition('linear', beginState, endState, 10)

/**
 * animationState = [
 *   0, 11.03429355281208, 22.126200274348417, 33.259259259259245, 44.41700960219478,
 *   55.58299039780521, 66.74074074074073, 77.87379972565157, 88.96570644718793, 100
 * ]
 * /
```

## Array

```js
import transition from '@jiaminghi/transition'

const beginState = [10, 20, 30]
const endState = [100, 200, 300]

const animationState = transition('linear', beginState, endState, 10)

/**
 * animationState = [
 *   [10, 20, 30],
 *   [32.415625, 64.83125, 97.24687499999999],
 *   [55, 110, 165],
 *   [77.58437500000001, 155.16875000000002, 232.753125],
 *   [100, 200, 300]
 * ]
 * /
```

## Object

```js
import transition from '@jiaminghi/transition'

const objectBeginState = { x: 10, y: 10, r: 5}
const objectEndState = { x: 100, y: 10, r: 5}

const animationState = transition('linear', objectBeginState, objectEndState, 5)

/**
 * animationState = [
 *   {x: 10, y: 10, r: 5},
 *   {x: 32.415625, y: 10, r: 5},
 *   {x: 55, y: 10, r: 5},
 *   {x: 77.58437500000001, y: 10, r: 5},
 *   {x: 100, y: 10, r: 5}
 * ]
 * /
```

## 递归模式
使用递归模式计算`Array`或`Object`中的深层数据。

```js
import transition from '@jiaminghi/transition'

const beginState = {
  points: [ [10, 30], [20, 80] ],
  origin: { x: 10, y: 20 },
  radius: 3
}

const endState = {
  points: [ [100, 230], [120, 10] ],
  origin: { x: 100, y: 200 },
  radius: 9
}

const animationState = transition('linear', beginState, endState, 3, true)

/**
 * animationState = [
 *   {
 *     origin: { x: 10, y: 20 },
 *     points: [ [10, 30], [20, 80] ],
 *     radius: 3
 *   },
 *   {
 *     origin: { x: 55, y: 110 },
 *     points: [ [55, 130], [70, 45] ],
 *     radius: 6
 *   },
 *   {
 *     origin: { x: 100, y: 200 },
 *     points: [ [100, 230], [120, 10] ],
 *     radius: 9
 *   }
 * ]
 * /
```

::: tip TIP
贝塞尔曲线不是匀速曲线，所以'linear'的计算结果不是精确的。
:::

<script>
import transition from '../.vuepress/transition'

// console.error(transition('linear', beginState, endState, 3, true))

export default {
  data () {
    return {
      transition
    }
  }
}
</script>