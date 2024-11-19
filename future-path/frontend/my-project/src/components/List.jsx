import { Link, useNavigate } from 'react-router-dom';
import PopUpList from '../layout/PopUpList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken, getRoleId } from '../../../api/services/auth';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import News from './News';


const List = () => {
  const [isPopUpListOpen, setIsPopUpListOpen] = useState(false);
  const [allSekolah, setAllSekolah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newSchool, setNewSchool] = useState({ namaSekolah: '', alamatSekolah: '', deskripsiSekolah: '', idKepemilikan: 1 });


  const handleAddSchool = async () => {
    const token = getToken();
    const role = getRoleId();
    setUserRole(role);
    setToken(token);
    if (!token) {
      navigate('/signin');
      return;
    }

    try {
      let url = `http://localhost:8080/future-path/user/list-sekolah?page=${currentPage}`; // Default URL

      // Mengubah URL berdasarkan kategori yang dipilih
      if (selectedCategory == "1") {
        url = `http://localhost:8080/future-path/user/cari-sekolah/negeri?sekolah`;
      } else if (selectedCategory == "2") {
        url = `http://localhost:8080/future-path/user/cari-sekolah/swasta?sekolah`;
      }

      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const fetchedSchool = response.data.data.sekolah || [];

      // Filter berdasarkan kategori setelah mendapatkan data
      if (selectedCategory) {
        const idKepemilikan = selectedCategory == "1" ? 1 : 2;
        setAllSekolah(fetchedSchool.filter(sekolah => sekolah.id_kepemilikan === idKepemilikan));
      } else {
        setAllSekolah(fetchedSchool); // Jika tidak ada kategori, tampilkan semua
      }

      setTotalPages(Math.ceil(response.data.data.total_data / 10));
      localStorage.setItem('sekolah', JSON.stringify(fetchedSchool));

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const confirmCreate = async (namaSekolah, alamatSekolah, deskripsiSekolah, idKepemilikan) => {
    try {
      const token = getToken();
      const response = await axios.post(`http://localhost:8080/future-path/admin/add-sekolah`, {
        nama_sekolah: namaSekolah,
        alamat_sekolah: alamatSekolah,
        deskripsi_sekolah: deskripsiSekolah,
        id_kepemilikan: idKepemilikan
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Pastikan respons memiliki data yang diharapkan
      if (response.data && response.data.data && response.data.data.sekolah) {
        const newSchoolData = {
          ...response.data.data.sekolah,
          id_sekolah: response.data.data.sekolah.id_sekolah
        };
        // Tambahkan sekolah baru ke dalam state
        setAllSekolah(prevSekolah => [...prevSekolah, newSchoolData]);
        handleAddSchool(); // Memanggil kembali untuk memperbarui daftar sekolah
      } else {
        console.error("Data sekolah tidak ditemukan dalam respons.");
      }
      setIsPopUpListOpen(false);
    } catch (err) {
      setError(err);
      console.error("Error adding school:", err.response?.data || err.message);
    }
  };


  useEffect(() => {
    handleAddSchool();
  }, [currentPage, selectedCategory, searchQuery]);

  const filteredSekolah = Array.isArray(allSekolah) ? allSekolah.filter(sekolah =>
    sekolah.nama_sekolah.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  if (loading) return <div className=''>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
      <div className="relative text-center text-white shadow-md ">
        <div className='pattern-zigzag-3d pattern-sky-700 pattern-bg-sky-900 pattern-size-7 pattern-opacity-100 py-56'>
          <div className="absolute ml-5  transform bottom-10 text-left">

            <h1 className="text-6xl">Pilihan</h1>
            <p className="text-xl">Temukan sekolah atau universitas favoritmu, dan temukan informasi lengkapnya!</p>
          </div>
        </div>
      </div>

      {userRole == 1 && (
        <button onClick={() => setIsPopUpListOpen(true)} className='border rounded-xl p-2 m-5'>Tambah Sekolah</button>
      )}

      <form onSubmit={(e) => { e.preventDefault(); }}>
        <div className='mt-10 flex justify-center'>
          <input
            type="search"
            className="p-2 w-1/2  rounded-l-xl border shadow-sm focus:outline-none hover:shadow-inner hover:shadow-gray-200 focus:shadow-inner active:transition-none "
            placeholder="Mau cari apa?"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            class="p-2.5 h-full text-sm font-medium text-white bg-sky-700 rounded-r-lg border shadow-md border-sky-700 hover:bg-sky-800 focus:shadow-inner hover:shadow-gray-200 active:shadow-inner focus:duration-500 ">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

        </div>
      </form>
      <div className='flex justify-end'>
        <div className='flex justify-end mt-10 mr-2'>
          <div className="w-56 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-1">
              Kategori
            </label>
            <select
              className="block appearance-none w-full border px-4 py-2 rounded-lg shadow-md leading-tight focus:outline-none active:transition-none active:transition-shadow focus:shadow-inner hover:shadow-inner hover:shadow-gray-200 "
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option className='shadow' value="">Semua</option>
              <option value="1">negeri</option>
              <option value="2">swasta</option>
            </select>
          </div>
        </div>

      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-3'>
        {filteredSekolah.length === 0 ? (
          <div className='col-span-3 text-center text-red-500 mt-5'>
            Sekolah tidak ditemukan
          </div>
        ) : (
          filteredSekolah.map((sekolah) => (
            <li key={sekolah.id_sekolah} className='justify-center border m-5 px-3 rounded-xl shadow-md hover:shadow-inner hover:shadow-gray-200 cursor-pointer'>
              <h2 className='m-1 text-xl font-semibold'>{sekolah.nama_sekolah}</h2>
              <p className='m-2'>{sekolah.alamat_sekolah}</p>
              <button className='border p-1 my-3 rounded-xl bg-sky-700 text-white text-sm'>
                <Link to={`/schoolDetail/${sekolah.id_sekolah}`} className='m-2'>Lebih Lanjut</Link>
              </button>
            </li>
          ))
        )}
      </ul>

      <PopUpList
        openPopUpList={isPopUpListOpen}
        closePopUpList={() => setIsPopUpListOpen(false)}
        title="Tambah Sekolah"
        message="Silakan masukkan informasi sekolah baru."
        onConfirm={confirmCreate}
        initialNama={newSchool.namaSekolah}
        initialAlamat={newSchool.alamatSekolah}
        initialDeskripsi={newSchool.deskripsiSekolah}
        styleType="create"
      />

      <div className='flex justify-center mt-5'>
        {currentPage > 1 && (
          <button
            onClick={handlePreviousPage}
            className='absolute mr-5'
            disabled={currentPage <= 1}
          >
            <MdNavigateBefore size={30} />
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            onClick={handleNextPage}
            className=''
            disabled={currentPage >= totalPages}
          >
            <MdNavigateNext size={30} />
          </button>

        )}
      </div>
    </div>
  );
};

export default List;