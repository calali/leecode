## 类型名称：图
多对多的关系

数据对象集：
顶点Vertex集合，至少一个
边edge集合，是顶点对，分为双向（），单行/有向<>，可以为空

度：和这个顶点有练习的连接点的个数，出度/入度。

操作集：
Create
BFS
DFS

术语：
1无向图：方向都是双向的
2有向图：方向可能单向
3带权重的图：网络

### 邻接矩阵表示法
一维数组表示

不适合存稀疏图。

适合稠密图或完全图

### 邻接表表示法
适合稀疏图
适合找任一节点的邻接点
方便计算无向图的度

### 图的遍历

#### BFS

#### DFS: Depth First Search 
深度优先
没有就原路退回

### 图不连通怎么办？

如果v到w之间的点都不同，则称为简单路径。

否则环称为回路。

连通分量：无向图的极大连通子图

有向图：
强连通：双向路径
弱连通：单向路径

强连通图：一个图中任一两个顶点之间都是都是强连通。

如何建立图