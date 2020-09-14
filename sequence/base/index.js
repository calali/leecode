

var list = [9,2,4,7,10,1,0,2]

function swap(list,a,b){
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}

function bubble_sort(list,l){
    for(let b = l-1;b>=0;b--){
        var flag = 0
        for(let i =0;i<l;i++){ // 把一轮中最大的放到最后一个位置
            if(list[i] > list[i+1]){
                swap(list,i,i+1)
                flag = 1
            }  
        }
        if(flag === 0){break}
    }
    return list
}
// console.log(bubble_sort(list,list.length))



function insertion_sort(list,l){
    for(let i = 1;i<l;i++){ // 开始摸牌
        
        let temp = list[i] //当前摸到的牌
        let b = i

        for(;b>0 && list[b-1] > temp;b--){ //把当前摸的牌依次和手中的牌比较，放到比手中的牌大的前面
            list[b] = list[b-1]
        }
        list[b] = temp
    }
    return list
}
// console.log(insertion_sort(list,list.length))


function scanforMinPosition(list,min,max){
    // 在[min,max]里面找list的最小值并返回
    let posotion = min
    for(let i=min;i<=max;i++){
        if(list[i]<list[posotion]){
            posotion = i
        }
    }
    return posotion
}
function selection_sort(list,l){
    for(let i =0;i<l;i++){
        const minPosition = scanforMinPosition(list,i,l-1)
        swap(list,i,minPosition)
    }
    return list
}
// console.log(selection_sort(list,list.length))

function merge_sort(list){
    const l = list.length
   if(l === 1){
    return list
   }

   const center = Math.floor((l)/2)
   const left = list.slice(0,center)
   const right = list.slice(center,l)
   return merge(merge_sort(left,left.length),merge_sort(right,right.length))
}

// // console.log(merge_sort(list,list.length))

// //先做2个有序子序列的合并

// let arr1 = [1,4,7,9]
// let arr2 = [2,3,5,8]
function merge(left,right){
    let result = []
    let temp = 0

    let l = 0
    let r = 0
    let leftEnd = left.length-1
    let rightEnd = right.length -1
    //把数组的值按照从小到大放到新的数组里
    while(l <=leftEnd && r <= rightEnd){
        if(left[l] < right[r]){
            result[temp++] = left[l++]
        }else{
            result[temp++] = right[r++]
        }
    }
    while(l<=leftEnd){
        result[temp++] = left[l++]
    }
    while(r<= rightEnd){
        result[temp++] = right[r++]
    }
    return result
}
// console.log(merge(arr1,arr2));
// console.log(merge_sort(list))

//归并排序的非递归写法
function mergeSort(arr) {
    var temp = [];//临时数组保存临时分组结果
    for (var length = 2; length / 2 <= arr.length; length *= 2) {//分组的长度从2开始，不断按照2的倍数增加，确保至少分一组
        for (var start = 0; start < arr.length; start += length) {//根据组内长度进行merge
            merge(start, start + length - 1, temp);//一组的开头index,一组的末尾index,当前存数据的临时数组
        }
    }
    function merge(begin, end, temp) {
        var mid = Math.floor((begin + end) / 2);
        var i = begin;
        var a = mid;
        var j = mid + 1;
        var b = end;
        var k = 0;

        //对两个子序列按照从小到大排序到temp上
        while (i <= a && i <= arr.length - 1 && j <= b && j <= arr.length - 1) {
            arr[i] > arr[j] ? temp[k++] = arr[j++] : temp[k++] = arr[i++]
        };
        //至多有一个子序列没有完全排序到temp上，再赋值到temp上
        while (i <= a && i <= arr.length - 1) {
            temp[k++] = arr[i++];
        };
        while (j <= b && j <= arr.length - 1) {
            temp[k++] = arr[j++];
        };
        //每次合并后结果存到arr上，方便下次排序在对arr进行
        for (var kk = 0; kk < k; kk++) {
            arr[begin + kk] = temp[kk];
        }
    }
    return arr
}
console.log(mergeSort(list))