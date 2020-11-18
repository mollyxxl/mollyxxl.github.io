MSBuild 路径注意下：

```
vs2010，vs2012，vs2013，vs2015 

C:\Windows\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe

vs2017
C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe
其他后面的版本类似。
```

用MSBuild编译时一直提示

“CS1617:选项“lastest” 对/langversion无效“，网上找了好多方法，都不行，后来发现msbuild使用的版本不对，vs2017之后msbuild安装地址变了，这里备忘记录下。