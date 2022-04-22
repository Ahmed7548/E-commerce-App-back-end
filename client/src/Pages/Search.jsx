import { Center, Container, Loader } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import ProductsList from "../components/Productslist/ProductsList";
import { useGetProductsQuery } from "../redux/productsSlice";

const Search = () => {
  const [searchParams] = useSearchParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  console.log(params);
  const { data, error, isFetching } = useGetProductsQuery();
  console.log(data);

  return (
    <>
      <Header>
        <Container size='xl'>
          <Navbar />
        </Container>
      </Header>
      {error && !isFetching && (
        <Center style={{ height: 200 }}>
          <div>We can fetch data !</div>
        </Center>
      )}
      {isFetching && (
        <Center style={{ height: 200 }}>
          <Loader
            color='red'
            size={70}
            variant='bars'
            style={{ marginTop: 40 }}
          />
        </Center>
      )}
      {data && <ProductsList products={data} />}
    </>
  );
};

export default Search;
