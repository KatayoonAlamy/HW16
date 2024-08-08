import React, { useCallback, useEffect, useMemo, useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { Col, Flex, Pagination, Row } from "antd";
import { getContactList } from "../utils/ApiCalls";
import Swal from "sweetalert2";
const baseUrl = import.meta.env.VITE_APP_URL;
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export default function CardWrapper() {
  const [page, setPage] = useState(1);
  const { error, data, isFetching, refetch } = getContactList({
    _page: page,
    _limit: 5,
  });

  // console.log();

  // useEffect(() => {}, [page]);
  const handleDeleteItem = async (id) => {
    MySwal.fire({
      cancelButtonText: "لغو",
      showCancelButton: true,
      showConfirmButton: true,
      title: "ایا از حذف اطمینان دارید",
      icon: "error",
      confirmButtonText: "حذف",
    }).then(async (res) => {
      if (res.isConfirmed) {
        await fetch(baseUrl + "/contacts/" + id, {
          method: "DELETE",
        }).then((res) => {
          res.ok && refetch();
        });
      }
    });
  };
  const onNext = () => {
    setPage(page + 1);
  };

  useCallback(() => {
    refetch();
  }, [onNext]);
  if (error) return <div>{error}</div>;
  if (isFetching) return <div>Loading...</div>;
  // refresh && refetch();
  return (
    <>
      <Row gutter={24}>
        {data.map((item, index) => (
          <Col className="flex justify-center" span={8} key={index}>
            <Card onDelete={() => handleDeleteItem(item.id)} {...item} />
          </Col>
        ))}
      </Row>
      {/* <Flex dir="ltr" justify="center" className="mt-5">
        <div>
          <button onClick={() => page > 1 && setPage(page - 1)}>prev</button>
          <div>{page}</div>
          <button onClick={onNext}>next</button>
        </div>
      </Flex> */}
    </>
  );
}
