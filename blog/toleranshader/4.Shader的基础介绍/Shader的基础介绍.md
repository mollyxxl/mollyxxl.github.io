本文是Shader基础篇的第四篇，主要讨论下Shader相关的基础知识。

## 数据类型

任何一门语言都有自己的数据类型，但是换汤不换药，就那么几种，这里介绍下CG的数据类型。CG支持7种数据类型：

```CG
float 32位浮点数
half  16位浮点数
int   32位整形数
fixed 12位定点数
bool  布尔数据
sampler  纹理对象的句柄 共有：sampler、sampler1D、sampler2D、sampler3D、samplerCUBE、samplerRECTT六种。
string 字符串，在CG中没有必要使用。
```

此外，CG还支持矩阵数据类型。

```CG
float3×3 matrix；   //表示3*3阶矩阵
```

## 结构体

CG中是支持结构体（structure）的，声明方式和C++中结构体声明非常类似。

```
具体用法：
struct appdata{
	//这里定义相关变量
}；
```

这里大家可能会问，什么时候会用到这个结构体呢，最直观的一个例子就是，**函数返回多个值**。

Surface Shader中Input结构体

```
struct Input
{
	float3 normal;
	float2 uv_MainTex;
}；
```

Vertex/Fragment 中appdata_base 、appdata_full等等这些都是Unity预定义的结构体。自己也可以定义

```
struct vertexInput{
	float4 vertex:POSITION;
	float4 texcoord0:TEXCOORD0;
}；
struct v2f{
	float4 pos:SV_POSITION;
	float4 texcoord0:TEXCOORD0;
};
```

wait? 上面的POSITION、TEXCOORD0、SV_POSITION是个啥？莫急，下面就要说这个东东。它就是Semantics（语义）。

## 语义

“语义”，顾名思义，诠释某个东西的含义，如果之前接触过CG、HLSL编程的话，就可能很熟悉了。**说白了，语义能够让Shader知道从哪里获取数据，并且还知道把输出的数据放到哪里**，是不是很聪明。

那么在Unity中，用TEXCOORD0来修饰texcoord，Unity就会识别TEXCOORD0语义，然后把模型的第一组纹理填充到texcoord中。

当然，可能有人困惑SV开头的语义是神马东东，SV其实是system-value（系统数值）的意思，需要注意的是SV开头的语义考虑到扩平台的问题了，所以能用SV开头的语义的尽量使用SV开头的语义，免去跨平台的烦恼。

模型→顶点着色器常用语义

```
  POSITION ：顶点位置
  NORMAL：顶点法线
  TANGENT：顶点切线
  TEXCOORD0-TEXCOORDn（Unity内置结构好像支持到6）：顶点纹理坐标
  COLOR：顶点颜色
```



顶点着色器→片段着色器

```
  SV_POSITION：裁剪空间中的顶点坐标
  COLOR0：顶点颜色
  COLOR1：顶点颜色
  TEXCOORDn：纹理坐标
```

片段着色器输出语义：

```
  SV_Target:输出值直接用于渲染了
```


最后需要说明一点的就是，如果Shader中函数的参数或者返回值是结构体，不要傻傻的还给结构体赋值一个语义，别说新手不明白是真有这么干的。本文的话题就讨论到这里，如有不明白的或者想要了解的，欢迎留言交流。

