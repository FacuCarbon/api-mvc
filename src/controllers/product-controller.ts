import { Request, Response } from "express";
import { ProductModel } from "../models/product-model.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { limit, category } = req.query;

    const limitNumber = limit ? parseInt(limit as string) : undefined;
    const categoryString = category ? (category as string) : undefined;

    const { data, error } = await ProductModel.getAll(
      limitNumber,
      categoryString,
    );

    if (error) throw error;
    res.json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al obtener productos", details: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, error } = await ProductModel.getById(id as string);

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(data[0]);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al obtener producto", details: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { data, error } = await ProductModel.create(req.body);
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Error al crear producto", details: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, error } = await ProductModel.update(id as string, req.body);
    if (error) throw error;
    res.json(data[0]);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Error al actualizar", details: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = await ProductModel.delete(id as string);
    if (error) throw error;
    res.status(204).send();
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Error al eliminar", details: error.message });
  }
};
