import React from "react";
import useSWR from "swr";
//https://api.escuelajs.co/api/v1/categories/5/products
const Banner = () => {
  const { data } = useSWR(
    `https://api.escuelajs.co/api/v1/categories/5/products`,
    fetcher
  );
  if (!data) return null;
  return (
    <div className="banner flex items-stretch justify-between gap-5 mb-14">
      <div className="banner-left basis-3/4 relative w-full rounded-xl">
        <img
          src="https://media-api-beta.thinkpro.vn/media/core/banners/2022/8/5/B%E1%BA%A3n%20sao%20Resize%201.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="banner-right basis-1/4 flex flex-col gap-5">
        <div className="p-5 bg-blue-100 rounded-xl flex flex-col gap-3">
          <h2 className="font-semibold text-xl">Miễn phí vận chuyển</h2>
          <p className="text-[14px]">
            100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
          </p>
        </div>
        <div className="p-5 bg-blue-100 rounded-xl flex flex-col gap-3">
          <h2 className="font-semibold text-xl">Bảo hành tận tâm</h2>
          <p className="text-[14px]">
            Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách hàng
            tới cùng.
          </p>
        </div>
        <div className="p-5 bg-blue-100 rounded-xl flex flex-col gap-3">
          <h2 className="font-semibold text-xl">Đổi trả 1-1 hoặc hoàn tiền</h2>
          <p className="text-[14px]">
            Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu
            cầu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
