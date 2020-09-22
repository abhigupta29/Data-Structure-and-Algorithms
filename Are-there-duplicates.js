// Impement areThereDuplicates function which accepts varibale arguements and check whether there are duplicates among
// arguements passed in

function areThereDuplicates(...args) {
    // Two pointer approach
    args.sort((a,b)=> a>b);
    let start = 0;
    let next = 1;
    while(next<args.length) {
        if(args[start]===args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
}