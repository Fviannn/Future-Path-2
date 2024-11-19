import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { getToken, getRoleId } from '../../../api/services/auth';

const NewsDetail = () => {
  const { id_berita } = useParams(); // Mengambil id_berita dari URL
  const [newsDetail, setNewsDetail] = useState(null);
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
      console.log("Fetched ID:", id_berita); // Log ID untuk verifikasi
      try {
        const response = await axios.get(`http://localhost:8080/future-path/user/full-news?id_berita=${id_berita}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Akses data berdasarkan struktur respons yang baru
        console.log("Response Data:", response.data); // Log respons data
        console.log("Response News:", response);
        // Ambil data berita dari struktur respons yang baru
        if (response.data.status.isSuccess) {
          setNewsDetail(response.data.data); // Ambil data dari objek data
        } else {
          setError("Failed to retrieve news detail");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news detail:", err); // Log error
        setError("Error fetching news detail");
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id_berita]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="m-[30px]">
      <Link to="/news" className="flex items-center text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l9-9m-9 9l9 9" />
        </svg>
        <span>Kembali ke halaman Berita</span>
      </Link>
      <div className='border-t-4 border-gray-700 mb-6 mt-6'></div>
      <h1 className=" text-5xl font-bold mb-4 text-gray-1000 mb-[45px]">
        {newsDetail.judul_berita}</h1>
      <p className='text-justify indent-14 '>{newsDetail.isi_berita}</p>
    </div>
  );
};

export default NewsDetail;