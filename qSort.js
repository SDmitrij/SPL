function QSort(arrToSort) {
    this.a = arrToSort;
    this.l = 0;
    this.r = this.a.length - 1;
    var _this = this;
    this.sorting = function(l, r) {
        this.i = l;
        this.j = r;
        this.pivotal = _this.a[Math.floor((this.i + this.j) / 2)];
        this.swap = function(el_1, el_2) {
            var tmp = _this.a[el_1];
            _this.a[el_1] = _this.a[el_2];
            _this.a[el_2] = tmp;
        };
        while(this.i < this.j) {
            while(_this.a[this.i] < this.pivotal) {this.i++;}
            while(_this.a[this.j] > this.pivotal) {this.j--;}
            if(this.i <= this.j) {
                this.swap(this.i++, this.j++);
            }
        }
        if(l < this.i) {this.sorting(l, this.i);}
        if(r > this.j) {this.sorting(this.j, r);}
    };
    this.sorting(this.l, this.r);
    console.log(this.a);
}

var toSort = new QSort([1, 6, 8, 9, 2, 0, 4, 3]);