let index = 4;
const maxLength = 4;

// debugger;

// Contoh While
// while(index < maxLength) {
//     console.log(`index ke ${index}`);

//     index = index +  1;
// }



// Contoh DO While
// do{
//     console.log(`index ke ${index}`);

//     index = index + 1;

// }while (index < maxLength);


/* Cat.
    Penggunaan While dengan Do While sama , namun Penggunaan While langsung melakukan pengecekan terlebih dahulu sebelum menjalankan
    Sedangkan
    Penggunaan Do While tida kmelakukan pengecekan , langsung menampilkan hasil terlebih dahulu baru pengecekan

    Jadi Lebih disarankan menggunakan While dibandingkan Do While
 */


// Contoh  for Loop (pengulangan)
for (let nomor = 1; nomor < 10; nomor++) {

    if (nomor % 2 == 0){
        console.log(`sampai ke nomor ${nomor}`);
        // break; /*fungsi function Break , berhenti lalu loncat ke akhir looping */

        continue; /*fungsi function Continue , tetap lanjut looping dan melewati fungsi dibawah(console.log)
                    seperti pada contoh ini , klo pada soal if nomor % 2 , dia akan menghilangkan angka genap (habis dibagi2) */
    }

    console.log(`nomor ke ${nomor}`)
}

/* Cat.
    for (let nomor = 1; nomor < 10; nomor++)
    Nomor dimulai dari angka 1 dan apakah nomor < 10 ; nomor++
    nomor++ artinya Nomor ditambah 1 
    Hasilnya nomor ke 1 - 9 karena kecil dr 10 
*/