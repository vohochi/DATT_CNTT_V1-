// // addToCart API function
// import { Product } from "@/types/Product";
// import axios from "axios";

// export const AddToCart = async (userId:number, product:Product, quantity:number) => {
//     try {
//         const response = await axios.post(
//             "https://api-core.dsp.one/api/auth/cart/add",
//             {
//                 customer_id: parseInt(userId, 10),
//                 address: "Địa chỉ mặc định", // Thêm địa chỉ
//                 shipping_unit: "Đơn vị vận chuyển mặc định", // Thêm đơn vị vận chuyển
//                 details: [
//                     {
//                         product_id: product.id,
//                         quantity,
//                         price: product.price,
//                         total_price_detail: quantity * product.price,
//                     },
//                 ],
//             }
//         );

//         return response.data;
//     } catch (error) {
//         console.error("Error adding to cart:", error);
//         throw error;
//     }
// };

// addToCart LocalStorage function
import { Product } from "@/types/Product";

export const AddToCart = (userId: number, product: Product, quantity: number) => {
    try {
        // Lấy giỏ hàng hiện tại từ localStorage
        const cartData = localStorage.getItem("cart");
        const cart = cartData ? JSON.parse(cartData) : [];

        // Tìm sản phẩm trong giỏ hàng
        const existingProductIndex = cart.findIndex(
            (item: Product) => item.product_id === product.id
        );

        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng và tổng giá
            cart[existingProductIndex].quantity += quantity;
            cart[existingProductIndex].total_price_detail =
                cart[existingProductIndex].quantity * product.price;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
            cart.push({
                product_id: product.id,
                name: product.name,
                quantity,
                price: product.price,
                total_price_detail: quantity * product.price,
                address: "Địa chỉ mặc định",
                shipping_unit: "Đơn vị vận chuyển mặc định",
            });
        }

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log("Product added to cart successfully");
        return cart; // Trả về giỏ hàng mới nhất
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};
