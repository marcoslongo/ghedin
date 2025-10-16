import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious } 
from "@/src/components/ui/pagination";


interface PaginacaoImoveisProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  searchParams: Record<string, string>;
}

export function PaginacaoImoveis({
  currentPage,
  totalItems,
  itemsPerPage,
  searchParams,
}: PaginacaoImoveisProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const buildUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 5; 

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      end = 4;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - 3;
    }

    if (start > 2) {
      pages.push("ellipsis");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-sm text-muted-foreground">
        Mostrando {(currentPage - 1) * itemsPerPage + 1} -{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems}{" "}
        imóveis
      </p>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? buildUrl(currentPage - 1) : "#"}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  href={buildUrl(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href={currentPage < totalPages ? buildUrl(currentPage + 1) : "#"}
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}