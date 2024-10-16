const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
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

//Tampilkan Data Mahasiswa yang pertama/ index ke-0
const mahasiswa = dataMahasiswa[0];
console.log(mahasiswa);

//Destructuring seluruh field
const {id, nama, tanggalLahir, fakultas, programStudi, semester, aktif, organisasi, ...sisaKeynya} = mahasiswa;
console.log(id, nama, tanggalLahir, fakultas, programStudi, semester, aktif, organisasi);
//Destructuring pada field nilai
console.log(sisaKeynya);
//Destructuring pada filed organisasi
console.log(organisasi);

// Spread operator untuk field organisasi
const tambahanOrg = ["Paskibra", ...organisasi]; 
console.log(tambahanOrg);

//Update pada field fakultas dan field semester
const updatedMahasiswa = { ...mahasiswa, fakultas: "Fakultas Teknologi Informasi", semester: 7, };
console.log(updatedMahasiswa);

//split tanggal lahir
console.log(tanggalLahir);
//hanya menampilkan tanggalnya saja
const tanggalAsli = tanggalLahir.split("-")
console.log(tanggalAsli[0]);

//Condisional operator: ?
const statusAktif = aktif? "masih aktif" : "waduh tidak aktif"
console.log(`atas nama ${nama} statusnya ${statusAktif} wak`);

const nonOrmawa = organisasi[0] || "tidak ikut ormawa";
console.log(nonOrmawa);

const allMhsAktif = dataMahasiswa.filter((mhs) => mhs.aktif);
console.log(allMhsAktif);

//Map tampil semua nama mahasiswa
const namaMahasiswa = dataMahasiswa.map((mhs) => mhs.nama);
console.log(namaMahasiswa);

//filtering semua mhs aktif
const mahasiswaAktif = dataMahasiswa.filter((mhs) => mhs.aktif);
console.log(mahasiswaAktif);
//mhs Fakultas Ilmu Komputer
const mahasiswaTeknik = dataMahasiswa.filter((mhs) => mhs.fakultas === "Fakultas Ilmu Komputer")
console.log(mahasiswaTeknik);

//Totalkan nilai seluruh mahasiswa
const totalNilaiSemuaMahasiswa = dataMahasiswa.reduce((sum, mhs) => {
  const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0);
  return sum + totalNilai;
}, 0);
console.log(totalNilaiSemuaMahasiswa)

// sort mhs berdasarkan semester
const sortingMhs = dataMahasiswa.slice().sort((a,b) => a.semester - b.semester)
console.log(sortingMhs)

//Menambah mhs baru
const newMahasiswa = {
  id: 4,
    nama: 'Andi Setiawan',
    tanggalLahir: '2001-04-12',
    fakultas: 'Fakultas Ilmu Komputer',
    programStudi: 'Sistem Informasi',
    semester: 2,
    nilai: {
      algoritma: 80,
      basisData: 82,
      pemrogramanWeb: 85,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa SI"],
};
const dataMahasiswaUpdated = [...dataMahasiswa, newMahasiswa];
console.log(newMahasiswa)

//Delete dan Update pada salah satu Mahasiswa
const dataMahasiswaAfterDelete =
dataMahasiswaUpdated.filter((mhs) => mhs.id !== 2);
console.log(dataMahasiswaAfterDelete);