const addItemInHTML = (value) => {
// const addItemInHTML = function(value) { *sama Cara dengan diatas*

    if (value == null) {
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")

    const itemHTML = `${value} <button onclick="hapus()" class="js">Hapus</button>`;

    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}


const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value

    // Jika tidak diinput value , dia akan return/exit
    if (!itemInputValue){
        return ;
    }

    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item");


    if (itemArray == null) {
        //jika itemArray adalah string atau null maka kita bikin array baru dengan key 0 dengan value 
        //itemInputValue
        itemArray = [itemInputValue]
    } else {
        //jika itemArray adalah bukan string atau null maka kemungkinan dia adalah array
        //jadi kita tambahkan dengan menggunakan method "push"
        itemArray = JSON.parse(itemArray)
        itemArray.push(itemInputValue)
    }

    //merubah array ke string supaya bisa disimpan di local storage
    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);

    // untuk menghilangkan value yang akan kita ketik
    itemInput[0].value = ""
}

const hapus = () => {
    $(event.currentTarget).parent().remove();
    // event.currentTarget itu ke button nya
    // alert('mau hapus');
}

const runNow = () => {
    const itemFromLS = localStorage.getItem("item")

    if (itemFromLS != null) {
        const items = JSON.parse(itemFromLS);

        items.forEach(item => {
            addItemInHTML(item)
        })
    }
    
}

runNow();







// Function in A Variable dan Arrow Function
// /*Cara Pertama*/
// // function logMessage (){
    
// // }

// /*Cara Kedua */
// const logMessage = function(pesan, paramenter2){
//     console.log(pesan);
//     console.log(paramenter2)
// }

// const logMessage2 = (pesan) => {
//     console.log(pesan)
// }

// const logMessage3 = (pesan, jumlah) => {
//     console.log(`${pesan} dengan jumlah ${jumlah}`)

// }

// const logMessage4 = pesan => console.log(pesan)


// // Contoh penggunaan return di function
// const multiple = function(number){
//     return number * number;
// }

// const nilai = multiple(5);
// console.log(`nilai multiple dari 5 adalah ${nilai}`);

// const multiple2 = (number) => {
//     return number * number ;
// } 
// /*Sama dengan atas hanya perbedaan penulisan , yg dibawah dikarenakan hanya 1 variabel*/
// // const multiple2 = (number) =>  number * number ;


// const nilai2 = multiple(6);
// console.log(`nilai multiple2 dari 6 adalah ${nilai2}`);

// /*Penggunaan function return untuk menampilkan hasil operasi langsung , 
//   jika tidak menggunakan return , dia akan undefined 

//   Penggunaan Return digunakan kalau alias seperti let nilaiSiswa = multiple(8)
//   Hasilnya nilai siswa adalah ${nilaiSiswa}; = 64
// */


const inputProduct = (productName = "", number = 1) => {
    console.log(`product name ${productName}, with ${number} pieces`)
}

/* Penggunaan If Else
// // Penggunaan If Else jika 1 perintah aja , tidak perlu menggunakan kurung 
// const isLulus = (nilai) => {
//     if (nilai >= 80)
//         return true;
//      else
//         return false;
// }

// const nilaiSaya = 78;
// let lulus = isLulus(nilaiSaya);

// // Cara Pertama
// console.log(`dengan nilai saya ${nilaiSaya} apakah saya lulus?`)
// console.log(lulus ? 'ya' : 'tidak')

// // Cara Kedua
// let kelulusan = lulus ? 'ya' : 'tidak'
// console.log(kelulusan)
*/


/* Callback Function
// Contoh Callback Function
const doWork = () => {
    console.log('bathing');
    console.log('eating');
    console.log('to office');
}

const doSleep = () => {
    console.log('bathing');
    console.log('eating');
    console.log('to kasur')
}

const ask = (message, doIt, somethingElse) => {
    const isSetuju = window.confirm(message);
    if (isSetuju){
        doIt();
    } else {
        somethingElse();
    }
}

ask ("do you work?", doWork, doSleep);
*/



