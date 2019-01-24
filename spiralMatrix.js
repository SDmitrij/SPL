function SpiralMatrix(n, m) {
    this.dim_N = n;
    this.dim_M = m;
    this.cur_i = 0, this.cur_j = 0;
    this.left = 0, this.right = this.dim_N - 1;
    this.top = 0, this.bottom = this.dim_M - 1;
    this.current_dir = 'e';
    this.fillMatrix = function() {
        switch (this.current_dir){
            case 'e' :
                if (this.cur_i < this.right) {
                    this.cur_i++;
                } else if (this.cur_i == this.right && this.cur_j < this.bottom) {
                    this.cur_j++;
                } else {
                    this.current_dir = 's'
                    if (this.right != this.dim_N - 1 && this.bottom != this.dim_M - 1 ) {this.left++;}
                        this.cur_i--;
                        this.top++;
                }
                return {'cur_i': this.cur_i, 'cur_j': this.cur_j}
            case 's' :
                if (this.cur_i > this.left) {
                    this.cur_i--;
                } else if (this.cur_i == this.left && this.cur_j > this.top) {
                    this.cur_j--;
                } else {
                    this.current_dir = 'e';
                    this.cur_j--;
                    this.right--;
                    this.bottom--;
                }
                return {'cur_i': this.cur_i, 'cur_j': this.cur_j}
        }
    };
}

var sp1 = new SpiralMatrix(10, 10);
var it = 0;
while(it < sp1.dim_N * sp1.dim_M) {
    it++;  
    var indexses = sp1.fillMatrix();
    console.log(indexses);  
}
