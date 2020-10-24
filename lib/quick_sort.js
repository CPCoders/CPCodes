function swap( a, b){
    var sw=[];
    sw[0]=b;
    sw[1]=a;
    return sw;
}

function wall(arr, first, last){
    var wallElement= arr[last];
    var i=first-1;
    for (var j=first; j<=last-1; j++)
    {
        if(arr[j]<wallElement){
            i++;
            var s=swap(arr[i],arr[j]);
            arr[j]=s[1];
            arr[i]=s[0];
        }
    }
    var s1=swap(arr[i+1], arr[last]);
    arr[i+1]=s1[0];
    arr[last]=s1[1];
    return i+1;
}

function quickSort(arr, first, last){
    if(first<last){
        var divider=wall(arr,first,last);
        arr=quickSort(arr,first,divider-1);
        arr=quickSort(arr,divider+1,last);
    }
    return arr;
}

module.exports.quickSort = function(arr, first, last){
    return quickSort(arr, first, last)
}