## Houdini中的层级和点

### 层级：

```
Houdini中的4个层级：
    vertices：顶点
    point：点
    primitive：面/几何体
    detail：整体

注意：
1.没有edge边这个层级
2.primitive不仅仅是面（如果polygon和nurbs物体才是面）：
  ·polygon face
  ·packed primitives packed Disk primitives，Packed Disk Sequence primitive，packed disk sequence    primitive
  ·polygon soup
  ·volume/VDB/heightfield
  ·Tetrahedron
  ·Bezier/NURBS surfaces
  ·polygon/Bezier/NURBS curves
  ·metaballs
  ·primitive 数学算法几何体（null,circle,sphere,tube）
```

### point 点

1. point在四个层级中是最重要的一个层级，是第一等公民，vertices，primitive和detail可以作为二等公民。point和attribute属性是构建houdini的两大基石。在houdini中绝大部分的操作都是对point进行控制，理解和掌握point这个概念是houdini最基础并且是最重要的一步。
2. 在数学上，point（点）的定义是空间上的一个位置(P)没有大小，也没有方向。这里就定义点的一个最基本和必备的属性是P位置属性。没有位置属性，点就不存在！
3. 在Houdini中，我们可以把任意属性赋予给point点，除了默认必备的位置属性P之外，我们还有pscale点的大小，N点的法线，v点的速度，ptnum点的序号和id点的身份等常用属性，还可以添加任意自定义的属性比如@myvar等。这种属性可以是任意数据类型（浮点，整形，字符，矢量和矩阵等）虽然在真实物理世界点是无限小的，但是在houdini中是可以渲染出大小，也可以是有运动方向。

```
tips：

Alt + ]  增加视图
Space + G 最大化显示
```

### 在houdini创建/生成点的方法

1.直接生成点的方法

- add
- pointgenerate
- wrangle

2.删除物体保留点的方法

- add
- delete

3.基于物体生成点的方法

- scatter  基本物体表面创建点（跟物体的表面的点无关）

- pointfrom volume  在物体内部创建点

- pointgenerate   基于物体表面的点生成重叠在一起的点

- pointreplicate 封装节点

  =point generate + noise

总结：

- 方法二和三虽然结果很类似，需要注意本质的区别
- 方法二是保留模型上的点，也就是本来在模型点上的属性是完全保留下来的
- 方法三是基于模型生成了新的点，这些点的生成和之前模型上的点是没有任何关系的（也不会继承属性）如果要继承原来的模型上的点，是在生成点之后再把属性传递过去。



