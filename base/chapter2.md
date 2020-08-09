## 线性表

"线性表(Linear List)": 由同类型数据元素构成有序序列的线性结构

表中元素个数称为线性表的长度

线性表没有元素时，称为空表

表起始位置称表头，表结束位置称表尾



### 线性表的抽象数据类型描述

类型名称: 线性表(List)

数据对象集：线性表是n(>=0)个元素构成的有序序列[公式]

操作集： 线性表L [公式] List, 整数i表示位置，元素X [公式] ElementType,线性表基本操作主要有

1. List MakeEmpty(): 初始化一个空线性表L;
   
2. ElementType FindKth(int K, List L): 根据位序K,返回相应元素
   
3. int Find(ElementType X, List L): 在线性表L中查找X的第一次出现位置；

4. void Insert(ElementType X, int i, List L): 在位序i前插入一个新元素X;

5. void Delete(int i, List L): 删除指定位序i的元素；

6. int Length(List L): 返回线性表L的长度n。

#### 线性表的顺序存储实现
[线性表的顺序存储实现](./array.js)

#### 线性表的链式存储实现
[线性表的顺序存储实现](./linkedList.js)

### 广义表（Generalized list)

广义表是线性表的推广

对于线性表而言，n个元素都是基本的单元素

广义表中，这些元素不仅可以是单元素也可以是另一个广义表

### 多重链表：链表中的节点可能同时隶属于多个链

## 堆栈
堆栈（Stack）：具有一定操作约束的线性表，只在一端(栈顶，Top)做插入，删除。

插入数据：入栈（Push)

删除数据：出栈（Pop)

后入先出：Last In First Out (LIFO)

数据对象集: 一个有0个或多个元素的有穷线性表

操作集：长度为MaxSize的堆栈S [公式] Stack, 堆栈元素item [公式] ElementType

1.Stack CreateStack(int MaxSize):生成空堆栈，其最大长度为MaxSize;

2.int IsFull(Stack S, int MaxSize):判断堆栈S是否已满；

3.void Push(Stack S, ElementType item):将元素item压入堆栈；

4.int IsEmpty(Stack S):判断堆栈S是否为空；

5.ElementType Pop(Stack S):删除并返回栈顶元素；

[堆栈数组实现](./stack1.js)
[堆栈链表实现](./stack2.js)

## 队列
[队列实现](./stack.js)