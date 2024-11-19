import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { getToken, getRoleId } from '../../../api/services/auth';

const SchoolDetail = () => {
  const { id_sekolah } = useParams(); // Mengambil id_berita dari URL
  const [schoolDetail, setschoolDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = getToken();
    const role = getRoleId();
    setToken(token);
    setUserRole(role);
    if (!token || !role) {
      navigate('/signin');
      return;
    }
    const fetchNewsDetail = async () => {
      const token = getToken();
      console.log("Fetched ID:", id_sekolah); // Log ID untuk verifikasi
      try {
        const response = await axios.get(`http://localhost:8080/future-path/user/sekolah?id_sekolah=${id_sekolah}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Akses data berdasarkan struktur respons yang baru
        console.log("Response Data:", response.data); // Log respons data
        console.log("Response News:", response);
        // Ambil data berita dari struktur respons yang baru
        if (response.data.status.isSuccess) {
          setschoolDetail(response.data.data); // Ambil data dari objek data
        } else {
          setError("Failed to retrieve school detail");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching school detail:", err); // Log error
        setError("Error fetching school detail");
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id_sekolah]);


  if (!school) {
    return <div>School not found!</div>; // Menampilkan pesan jika sekolah tidak ditemukan
  }

  return (
    <div className='m-5'>
      <h1 className='text-3xl font-bold'>{school.name}</h1>
      <p className='mt-4'>{school.description}</p>
      <h2 className='mt-4 text-xl font-semibold'>Informasi Lengkap</h2>
      <p>{school.fullInfo}</p>
    </div>
  );
};

export default SchoolDetail;