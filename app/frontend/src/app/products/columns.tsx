"use client"

import { Button } from "@/components/ui/button";
import { ProductSchema } from "@/lib/zodSchema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<ProductSchema>[] = [
    {
        accessorKey: "name",
        header: "Nome do Produto",
      },
      {
        accessorKey: "description",
        header: "Descrição do Produto",
      },
      {
        accessorKey: "price",
        header: ({column}) => {
            return (
                <div className="text-center">
                    <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Preço
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
          const price = parseFloat(row.getValue("price"));
          const formattedPrice = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price);
    
          return <div className="text-center font-medium">{formattedPrice}</div>;
        },
      },
      {
        accessorKey: "available",
        header: () => <div className="text-center">Disponível para Venda</div>,
        cell: ({ row }) => (
          <div className="text-center">
            {row.getValue("available") ? "Sim" : "Não"}
          </div>
        ),
      },
]