import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import productApi from "api/productApi";
import { useEffect, useState } from "react";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 12,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: "salePrice:ASC",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fail to fetch data", error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      ...newFilters,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid sx={{ width: "250px" }} item>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid sx={{ flex: "1 1 0" }} item>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />

              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Pagination
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "30px",
                  pb: "20px",
                }}
                count={Math.ceil(pagination.total / pagination.limit)}
                color="primary"
                page={pagination.page}
                onChange={handlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
