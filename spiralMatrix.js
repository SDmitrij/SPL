var cur_i = 0, cur_j = 0;
var dim_M = 6, dim_N = 6;
var left = 0, right = dim_N - 1;
var top = 0, bottom = dim_M - 1;
var current_dir = 'EAST';
function fillMatrix()
{
    switch (current_dir){
        case 'EAST' :
            if (cur_i < right) {
                cur_i++;
            } else if (cur_i == right && cur_j < bottom) {
                cur_j++;
            } else {
                current_dir = 'SOUTH'
                if (right != dim_N - 1 && bottom != dim_M - 1 ) {left++;}
                top++;
            }
            return {'cur_i': cur_i, 'cur_j': cur_j}
        case 'SOUTH' :
            if (cur_i > left) {
                cur_i--;
            }else if (cur_i == left && cur_j > top) {
                cur_j--;
            } else {
                current_dir = 'EAST';
                right--;
                bottom--;
            }
            return {'cur_i': cur_i, 'cur_j': cur_j}
    }
}

var it = 0;
while (it <= dim_M * dim_N) {
    console.log(fillMatrix());
    it++;
}