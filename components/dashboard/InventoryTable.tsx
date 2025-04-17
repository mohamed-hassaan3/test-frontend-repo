"use client";
import { INVENTORY, RECEIPTS } from "@/lib/data";
import { Table, Badge } from "flowbite-react";
import { FaFilter } from "react-icons/fa";
import SearchWithBtn from "../ui/SearchWithBtn";

export function InventoryTable() {
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
      <h1 className=" text-2xl font-extrabold dark:text-gray-400">Inventory</h1>
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
          <Table.HeadCell>ITEM NAME</Table.HeadCell>
          <Table.HeadCell>CATEGORY</Table.HeadCell>
          <Table.HeadCell>STOCK LEVEL</Table.HeadCell>
          <Table.HeadCell>UNIT PRICE</Table.HeadCell>
          <Table.HeadCell>TOTAL VALUE</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {INVENTORY?.map((inventory) => (
            <Table.Row key={inventory.id}>
              <Table.Cell>#{inventory.id}</Table.Cell>
              <Table.Cell>{inventory.item}</Table.Cell>
              <Table.Cell>{inventory.category}</Table.Cell>
              <Table.Cell>{inventory.stockLevel}</Table.Cell>
              <Table.Cell>{inventory.unitPrice}</Table.Cell>
              <Table.Cell>{inventory.totalValue}</Table.Cell>
              <Table.Cell>
                <div className="w-fit text-center">
                  {getStatusBadge(inventory.status)}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
