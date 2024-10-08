const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

const listMhs = dataMahasiswa;
console.log(listMhs);

const mahasiswa = listMhs[2];
console.log(mahasiswa);

//console.log(mahasiswa.nama);//

//destrukturing = pecahin struktur
const {nama, tanggalLahir, organisasi, aktif, ...sisaKeynya} = mahasiswa;
console.log(nama);

console.log(sisaKeynya);

console.log(organisasi);

// spread
const tambahanOrg = ["PES", ...organisasi]; // bisa naruh PES nya di belakang//
console.log(tambahanOrg);

//split'
console.log(tanggalLahir);
const tanggalAsli = tanggalLahir.split("-")
console.log(tanggalAsli); //kalo tanggalnya aja bisa console.log(tanggalAsli[0]);//

const dataDiri = `Nama: ${nama}, tanggal lahir: ${tanggalLahir}`;
console.log(dataDiri);

//kondisional operator: ?, ??, ||, &&//
const statusAktif = aktif? "masih aktif" : "walawe tidak aktif"
console.log(`atas nama ${nama} statusnya ${statusAktif} njir`);

const nonOrmawa = organisasi[0] || "tidak ikut ormawa";
console.log(nonOrmawa);

const allMhsAktif = listMhs.filter((mhs) => mhs.aktif);
console.log(allMhsAktif);

//nambah objek baru
const newMhs = {
  id: 5,
  nama: "Amba Tukam",
  nilai: {
    algoritma: 80,
    basdat: 85,
    daspro: 90
  }
};

const dataAnyar = [...listMhs, newMhs];
console.log(dataAnyar);

// sort mhs
const sortingMhs = listMhs.slice().sort((a,b) => a.semester - b.semester)

console.log(sortingMhs)