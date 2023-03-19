// pages/contact.tsx
import React from 'react';
import Head from 'next/head';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで入力データを処理します。
    console.log('Form submitted');
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-6">お問い合わせフォーム</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
