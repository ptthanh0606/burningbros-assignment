import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductOne } from "src/entity/product";

export interface ProductCardProps {
  product: ProductOne;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height={150}
        title={product.title}
        image={product.thumbnail}
      />

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="body2">
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            fontWeight={700}
            color="primary"
          >
            ${product.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="caption" color="text.secondary">
            Rating: {product.rating}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            In stock: {product.stock}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
