'use server'
import { PrismaClient } from "@/generated/prisma"
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../contants";

// Get latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        },
    });

    return convertToPlainObject(data);
}