import { Button, IconButton, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ProductType, ProductsType } from "../../utils/containers";
import ResultItem from "../ResultItem/ResultItem";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchResult.scss";

const SearchResult = () => {
  function request<TResponse>(
    url: string,
    config: RequestInit = {}
  ): Promise<TResponse> {
    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => data.products as TResponse);
  }

  async function fetchData(barcode: string) {
    const searchURL =
      "https://api.leltar.app/products/search?barcode=" + barcode;
    const configuration = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": "d1d1cdbf-ce70-4677-bca4-4016e68267b9",
      },
    };
    return await request<ProductsType>(searchURL, configuration);
  }

  const [products, setProducts] = useState<ProductsType>([]);

  // useEffect(() => {
  //   const productsData = fetchData("54491472");
  //   productsData.then((p) => {
  //     setProducts(p);
  //   });
  // }, []);

  return (
    <>
      <div className="BarcodeSearchField">
        <TextField
          className=""
          id="email"
          type="email"
          name="email"
          label="barcode"
          defaultValue="54491472"
          variant="outlined"
          size="small"
          required
        />
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      <ul>
        {products.map((product) => {
          // console.log(product);

          return (
            <li key={product.id}>
              <ResultItem product={product} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SearchResult;
