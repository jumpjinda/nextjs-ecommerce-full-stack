import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Products from "@/app/models/Products";

export const GET = async (request) => {
  // fetch data from mongodb
  try {
    await connect();

    const products = await Products.find();
    return new NextResponse(products, { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
