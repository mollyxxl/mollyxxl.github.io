point与vertices

vertices：顶点

point：点

```
tips：
D  ：显示Display Options面板

```

### vertices和point的由来

最早是没有point这个概念，所有点都是vertices顶点，因为每个面都是不连续的，意味着如果你想调整某个‘点’实际上你是要选择重叠在一起的所有顶点，这样非常不方便。所以后来定义了point这个概念，我只有选择一个point，那么就会牵动链接的vertex从而带动了面。由于这个便捷性，point后来居上，在houdini中成为了最重要的一个层级。

1.vertices和point其实本质上一个东西

2.point是为了方便人类操作习惯而出现的，并且它的出现反过来变得比vertices更加重要。在houdini中，它是重要的一个层级。



houdino的point和vertices

- point可以单独存在，但是vertices不能
- vertices是point与primitive的桥梁，没有primitive就不会有vertices



