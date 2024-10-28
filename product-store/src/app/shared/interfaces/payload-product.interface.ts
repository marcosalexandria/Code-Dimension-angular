import { Product } from "./product.inteface";

//retirando o id para não ser enviado na requisicao, se quiser tirar mais parametros Omit<Product, "id" | "title">
export type ProductPayload = Omit<Product, "id">;
