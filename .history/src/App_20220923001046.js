function App() {
  return (
    <div className="app page-container mb-20">
      <div className="header flex items-center justify-start gap-x-5 mb-5">
        <div className="logo -translate-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={96}
            height={96}
            viewBox="0 0 48 48"
            style={{ fill: "#000000" }}
          >
            <path
              fill="#42A5F5"
              d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"
            />
            <path
              fill="#42A5F5"
              d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"
            />
            <path
              fill="#1E88E5"
              d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"
            />
          </svg>
        </div>
        <div className="menu p-3 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h2 className="font-medium">Danh mục</h2>
        <h2 className="font-medium text-primary ">Khuyến mại</h2>
        <label
          htmlFor="search"
          className="flex-1 py-2 px-4 bg-gray-200 flex items-center gap-4 rounded-full border-2 focus:border-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            id="search"
            name="search"
            placeholder="Tên sản phẩm, nhu cầu, hãng ..."
          />
          <button className="flex-shrink-0 px-4 py-2 bg-primary text-white font-semibold rounded-full">
            Tìm Kiếm
          </button>
        </label>
        <div className="cart flex items-center gap-x-3 py-3 px-5 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="text-xl">0</span>
        </div>
        <div className="delivery p-3 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <div className="notification p-3 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div className="user p-3 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="navbar flex items-center justify-center gap-x-5 mb-10">
        <span className="py-2 px-4 bg-blue-200 text-lg text-black font-medium rounded-full">
          Electronics
        </span>
        <span className="py-2 px-4 bg-blue-200 text-lg text-black font-medium rounded-full">
          Jewelery
        </span>
        <span className="py-2 px-4 bg-blue-200 text-lg text-black font-medium rounded-full">
          Men's clothing
        </span>
        <span className="py-2 px-4 bg-blue-200 text-lg text-black font-medium rounded-full">
          Women's clothing
        </span>
      </div>
      <div className="banner flex items-stretch justify-between gap-5 mb-5">
        <div className="banner-left basis-3/4 relative w-full rounded-lg">
          <img
            src="https://media-api-beta.thinkpro.vn/media/core/banners/2022/8/5/B%E1%BA%A3n%20sao%20Resize%201.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="banner-right basis-1/4 flex flex-col gap-5">
          <div className="p-5 bg-blue-100 rounded-2xl flex flex-col gap-3">
            <h2 className="font-semibold text-xl">Miễn phí vận chuyển</h2>
            <p className="text-[14px]">
              100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
            </p>
          </div>
          <div className="p-5 bg-blue-100 rounded-2xl flex flex-col gap-3">
            <h2 className="font-semibold text-xl">Bảo hành tận tâm</h2>
            <p className="text-[14px]">
              Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách hàng
              tới cùng.
            </p>
          </div>
          <div className="p-5 bg-blue-100 rounded-2xl flex flex-col gap-3">
            <h2 className="font-semibold text-xl">
              Đổi trả 1-1 hoặc hoàn tiền
            </h2>
            <p className="text-[14px]">
              Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu
              cầu.
            </p>
          </div>
        </div>
      </div>
      <div className="product-list grid grid-cols-4 gap-5">
        <div className="product-item p-2 bg-blue-50 rounded-2xl flex flex-col gap-3">
          <div className="w-full h-[250px] rounded-2xl">
            <img
              src="https://media-api-beta.thinkpro.vn/media/core/products/2022/7/3/UX3402ZA-KM218W-1.png?w=500&h=500"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <h2 className="font-medium text-xl">ASUS Zenbook 14 OLED</h2>
          <h3 className="font-medium text-lg text-primary">22.990.000</h3>
          <div className="flex items-center justify-between">
            <span>Rate: 3.9</span>
            <span>Count: 120</span>
          </div>
          <button className="w-full p-3 bg-secondary"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
