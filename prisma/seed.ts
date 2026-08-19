import { PrismaClient } from "@prisma/client";
import { INITIAL_PRODUCTS } from "../lib/products-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Prisma ORM database seed...");

  for (const productData of INITIAL_PRODUCTS) {
    // 1. Upsert Category
    const category = await prisma.category.upsert({
      where: { name: productData.category },
      update: {},
      create: {
        name: productData.category,
        slug: productData.category.toLowerCase().replace(/\s+/g, "-"),
      },
    });

    // 2. Upsert Product via Prisma ORM
    const product = await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {
        name: productData.name,
        description: productData.description,
        benefits: productData.benefits.join(" | "),
        ingredients: productData.ingredients.join(", "),
        images: productData.images,
        isFeatured: productData.isFeatured,
      },
      create: {
        id: productData.id,
        name: productData.name,
        slug: productData.slug,
        description: productData.description,
        benefits: productData.benefits.join(" | "),
        ingredients: productData.ingredients.join(", "),
        categoryId: category.id,
        images: productData.images,
        isFeatured: productData.isFeatured,
      },
    });

    // 3. Create Variants via Prisma ORM
    for (const variant of productData.variants) {
      const existingVariant = await prisma.productVariant.findFirst({
        where: {
          productId: product.id,
          quantityLabel: variant.quantityLabel,
        },
      });

      if (!existingVariant) {
        await prisma.productVariant.create({
          data: {
            productId: product.id,
            quantityLabel: variant.quantityLabel,
            price: variant.price,
          },
        });
      }
    }
  }

  console.log("✅ Prisma ORM seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during Prisma ORM seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
