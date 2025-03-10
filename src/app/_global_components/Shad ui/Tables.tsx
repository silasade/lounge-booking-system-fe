import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  return (
    <div className="w-full border bg-white rounded-md shadow-sm">
      <Table className="bg-white">
        {/* Table Header */}
        <TableHeader className="bg-[#E9EBEFC7] h-[69px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-[#898989] font-medium text-[14px] p-[24px]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="h-[72px] border-b border-[#D9D9D9]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="text-[#4A4A4A] font-medium text-[16px] p-[24px]"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-4">
                No data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}

      <Pagination className="w-full">
        <PaginationContent className="flex w-full flex-row items-center justify-between p-4">
          {table.getCanPreviousPage() && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => table.previousPage()}
                aria-disabled={!table.getCanPreviousPage()}
              />
            </PaginationItem>
          )}
          <div className="flex items-center flex-row gap-2">
            {[...Array(table.getPageCount())].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={table.getState().pagination.pageIndex === index}
                  onClick={() => table.setPageIndex(index)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </div>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => table.nextPage()}
              aria-disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Rows Per Page Selector */}
      <div className="flex items-center justify-end p-4 space-x-2">
        <span>Rows per page:</span>
        <select
          className="border rounded px-2 py-1"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataTable;
