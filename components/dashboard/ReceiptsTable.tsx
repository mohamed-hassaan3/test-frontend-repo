"use client";
import { RECEIPTS } from "@/lib/data";
import { Table, Badge } from "flowbite-react";
import { FaFilter } from "react-icons/fa";
import SearchWithBtn from "../ui/SearchWithBtn";
import { useDashboard } from "@/context/DashboardContext";

export function ReceiptsTable() {
    // For API DATA
    const {loading, data, error} = useDashboard()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge color="success">Paid</Badge>;
      case "pending":
        return <Badge color="warning">Pending</Badge>;
      case "overdue":
        return <Badge color="failure">Canceled</Badge>;
      default:
        return <Badge color="gray">Unknown</Badge>;
    }
  };

  return (
    <div className="my-16 space-y-8 overflow-x-auto rounded-md bg-white p-4 shadow-xl dark:bg-gray-700">
      <h1 className=" text-2xl font-extrabold dark:text-gray-400">Receipts</h1>
      <div className="flex items-center gap-8">
        <SearchWithBtn />
        <div>
          <button
            type="button"
            className="me-2 inline-flex items-center rounded-lg border border-gray-700 px-5 py-2 text-center text-sm font-medium text-black hover:bg-blue-100 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:text-gray-500 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-800"
          >
            <FaFilter />
            Filter
          </button>
        </div>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>CUSTOMER NAME</Table.HeadCell>
          <Table.HeadCell>DESCRIPTION</Table.HeadCell>
          <Table.HeadCell>TYPE</Table.HeadCell>
          <Table.HeadCell>DATE</Table.HeadCell>
          <Table.HeadCell>AMOUNT</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
          <Table.HeadCell>PAYMENT METHOD</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {RECEIPTS?.map((receipt) => (
            <Table.Row key={receipt.id}>
              <Table.Cell>#{receipt.id}</Table.Cell>
              <Table.Cell>{receipt.customer}</Table.Cell>
              <Table.Cell>{receipt.description}</Table.Cell>
              <Table.Cell>{receipt.type}</Table.Cell>
              <Table.Cell>{receipt.date}</Table.Cell>
              <Table.Cell>{receipt.amount}</Table.Cell>
              <Table.Cell>
                <div className="w-fit text-center">
                  {getStatusBadge(receipt.status)}
                </div>
              </Table.Cell>
              <Table.Cell>{receipt.method}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex w-full items-center justify-between px-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span className="px-1 font-semibold text-gray-900 dark:text-white">
            1
          </span>
          to
          <span className="px-1 font-semibold text-gray-900 dark:text-white">
            10
          </span>
          of
          <span className="px-1 font-semibold text-gray-900 dark:text-white">
            100
          </span>
          Entries
        </span>
        <div className="xs:mt-0 mt-2 inline-flex">
          <button className="flex h-8 items-center justify-center rounded-s bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Prev
          </button>
          <button className="flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
