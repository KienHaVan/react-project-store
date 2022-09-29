import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//https://api.escuelajs.co/api/v1/categories/5/products
const Banner = () => {
  const { data } = useSWR(
    `https://api.escuelajs.co/api/v1/categories/5/products`,
    fetcher
  );
  if (!data) return null;
  return (
    <div className="banner flex items-stretch justify-between gap-5 mb-14">
      <div className="banner-left basis-3/4 relative w-full rounded-xl overflow-hidden">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {data.length > 0 &&
            data.map((item) => (
              <SwiperSlide>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
        </Swiper>
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
