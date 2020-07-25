//membuat class
class hargaTanah{
    //konstruktor berisi data dari pak Arman
    constructor(p,l,h){
        this.panjang = p
        this.lebar = l
        this.harga = h
    }

    //fungsi yang berisi operasi data sekaligus penambahan ppn
    total = () => {
        return this.panjang * this.lebar * this.harga * 115 / 100
    }
}

//pembuatan objek yang akan digunakan
let tanah = new hargaTanah(20.5, 30, 1500000)

//tampil nominal total yang harus dibayar pak Arman
console.log("Nominal yang harus dibayar = " + tanah.total());