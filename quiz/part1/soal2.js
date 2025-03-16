let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
  input.pop();
  input.push("Pria", "SMA Internasional Metro");
  console.log(input);

  let tanggal = input[3];
  let arrTanggal = tanggal.split("/");
  let bulan = arrTanggal[1];

  switch (bulan) {
    case "01":
      console.log("Januari");
      break;
    case "02":
      console.log("Februari");
      break;
    case "03":
      console.log("Maret");
      break;
    case "04":
      console.log("April");
      break;
    case "05":
      console.log("Mei");
      break;
    case "06":
      console.log("Juni");
      break;
      // dan seterusnya
    default:
      console.log("Error: input bulan tidak sesuai")
      break;
  }
    
  console.log(arrTanggal);
  console.log(arrTanggal.join("-"));
  console.log(input[1].slice(0,15));
    
}

dataHandling(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
