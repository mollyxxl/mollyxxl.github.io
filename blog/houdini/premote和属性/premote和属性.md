### 属性转换层级

- 属性可以在各层级转化vertices，point，primitive和detail
- 转化可以由高层级到低层级，也可以由低层级向高层级转化
- attribute promote
  - 1需要转化的属性名字
  - 2层级→层级选择
  - 3转化的算法
  - 4是否重命名
  - 5是否删除原层级的属性

#### 转换方法汇总

- maximum 最大值
- minimum  最小值
- average 平均值
- mode 众数 出现最多的值，如果有同时出现两个或者多个最多的数，那么选择值最小的
- median 中位数 排中间的数，如中间有两个数取值最大的
- sum 求和
- sum of Squares 平方和
- root mean square 均方根  将N个项的平方和除以N后开平方的结果
- first Match 元素第一个匹配
- last Match 元素最后一个匹配

### vertices和point的属性之争

vertices和point是同一个东西，所以都可以继承各种属性，但是不能够同事存在相同的属性





​      

