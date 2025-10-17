import React, { useState, useRef } from 'react';
import { useUser } from '../../contexts/UserContext';
import Avatar from '../common/Avatar';
import { UploadIcon } from '../common/Icons';

const WelcomeScreen: React.FC = () => {
  const { login } = useUser();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(''); // Will store base64 string
  const [password, setPassword] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    const isAdminLogin = password.trim().toLowerCase() === 'admin';
    // Use the uploaded avatar, or 'default' if none was uploaded.
    login({ name: name.trim() || 'Anata', avatar: avatar || 'default' }, isAdminLogin);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isButtonDisabled = !(
    password.trim().toLowerCase() === 'admin' || 
    (name.trim() !== '' && password.trim() !== '')
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/gif"
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-3xl">JQ</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Selamat Datang!</h1>
        <p className="text-slate-500 mt-2">Buat profil Anda untuk memulai petualangan belajar bahasa Jepang.</p>
        
        <div className="space-y-6 mt-8 text-left">
          {/* Avatar Upload Section */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2 text-center">Unggah Foto Profil</label>
            <div className="flex justify-center">
              <button
                onClick={handleUploadClick}
                className="w-32 h-32 rounded-full group bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center transition hover:border-red-500"
                aria-label="Upload profile picture"
              >
                {avatar ? (
                  <div className="relative w-full h-full">
                    <Avatar avatarId={avatar} className="w-full h-full" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center rounded-full transition-opacity">
                      <UploadIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                ) : (
                  <UploadIcon className="w-12 h-12 text-slate-400 group-hover:text-red-500 transition" />
                )}
              </button>
            </div>
          </div>
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Nama Tampilan</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-slate-300 p-3 rounded-lg bg-slate-100 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Masukkan nama Anda..."
            />
          </div>
          
          {/* Password Input */}
           <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">Kata Sandi</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-slate-300 p-3 rounded-lg bg-slate-100 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Masukkan kata sandi..."
            />
          </div>
        </div>

        <button 
            onClick={handleStart} 
            disabled={isButtonDisabled}
            className="mt-8 w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400 disabled:cursor-not-allowed"
        >
          Mulai Belajar
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;