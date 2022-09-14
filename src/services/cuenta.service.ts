import { Cuenta } from "../interfaces/cuenta.interface";
import ItemModel from "../models/item";

const insertCuenta = async (item: Cuenta) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCuentas = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCuenta = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateCuenta = async (id: string, data: Cuenta) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteCuenta = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};

export { insertCuenta, getCuentas, getCuenta, updateCuenta, deleteCuenta };