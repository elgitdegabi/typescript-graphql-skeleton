import { Router } from "express";
import { getProduct, getProducts, addProduct, updateProduct, deleteProduct } from "../controller/product.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);

router.post("/product/add", addProduct);
router.post("/product/update", updateProduct);
router.post("/product/delete", deleteProduct);

export default router;
