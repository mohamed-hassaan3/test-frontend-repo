"use client";
import { Table, Badge, Button } from "flowbite-react";

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge color="success">Paid</Badge>;
      case "pending":
        return <Badge color="warning">Pending</Badge>;
      case "overdue":
        return <Badge color="failure">Overdue</Badge>;
      default:
        return <Badge color="gray">Unknown</Badge>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Invoice ID</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {invoices?.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>#{invoice.id.slice(0, 8)}</Table.Cell>
              <Table.Cell>{invoice.customer}</Table.Cell>
              <Table.Cell>${invoice.amount.toFixed(2)}</Table.Cell>
              <Table.Cell>
                {new Date(invoice.date).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>{getStatusBadge(invoice.status)}</Table.Cell>
              <Table.Cell>
                <Button size="xs" gradientDuoTone="purpleToBlue">
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
