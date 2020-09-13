

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

// function merge_sort(list,l){
//    if(l === 1){
//     return l
//    }

//    const center = Math.floor((l)/2)
//    const left = list.slice(0,center)
//    const right = list.slice(center,l)
//    return merge(merge_sort(left,left.length),merge_sort(right,right.length))
// }

// // console.log(merge_sort(list,list.length))

// //先做2个有序子序列的合并

// let arr1 = [1,4,7,9]
// let arr2 = [2,3,5,8]
// function merge(left,right){
//     let result = []
//     let temp = 0

//     let l = 0
//     let r = 0
//     let leftEnd = left.length-1
//     let rightEnd = right.length -1
//     //把数组的值按照从小到大放到新的数组里
//     while(l <=leftEnd && r <= rightEnd){
//         if(left[l] < right[r]){
//             result[temp++] = left[l++]
//         }else{
//             result[temp++] = right[r++]
//         }
//     }
//     while(l<=leftEnd){
//         result[temp++] = left[l++]
//     }
//     while(r<= rightEnd){
//         result[temp++] = right[r++]
//     }
//     return result
// }
// console.log(merge(arr1,arr2));
console.log(mergeSort(list,list.length))

function mergeSort(arr) {
    const length = arr.length;
    if (length === 1) { //递归算法的停止条件，即为判断数组长度是否为1
        return arr;
    }
    const mid = Math.floor(length / 2);
   
    const left = arr.slice(0,  mid);
    const right = arr.slice(mid, length);
  
    return merge(mergeSort(left), mergeSort(right)); //要将原始数组分割直至只有一个元素时，才开始归并
}

function merge(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    //left, right本身肯定都是从小到大排好序的
    while( il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
        
    }

    //不可能同时存在left和right都有剩余项的情况, 要么left要么right有剩余项, 把剩余项加进来即可
    while (il < left.length) { 
        result.push(left[il]);
        il++;
    }
    while(ir < right.length) {
        result.push(right[ir]);
        ir++;
    }
    return result;
}