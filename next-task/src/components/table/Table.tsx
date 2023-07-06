import * as React from 'react';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getObjectKeys } from '@/utils';
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/material';

interface ITable<T> extends TableProps {
  headings?: unknown[];
  data?: T[];
  displayHeader?: boolean;
  enablePagination?: boolean;
  totalCount?: number;
  currentPage?: number;

  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (page: number) => void;
  pageSize: number;
}

const MuiTable = Table;

export default function MyTable<T>({
  headings,
  data,
  displayHeader = true,
  enablePagination = true,
  onPageChange = () => {},
  onRowsPerPageChange = () => {},
  totalCount = 0,
  currentPage = 0,
  pageSize = 0,
}: ITable<T>) {
  return (
    <TableContainer>
      <MuiTable aria-label='simple table'>
        {displayHeader && (
          <TableHead sx={{ backgroundColor: '#FAF9F6' }}>
            <TableRow>
              {headings?.map((header: any, index) => (
                <TableCell
                  key={index}
                  align={index === 0 ? 'inherit' : 'center'}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {data?.map((row, index) => {
            const keys = getObjectKeys(row as {});
            return (
              <TableRow key={index}>
                {keys.map((key, i) => (
                  <TableCell
                    key={i}
                    component='th'
                    scope='row'
                    align={i === 0 ? 'left' : 'center'}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>

      {enablePagination && !!data?.length && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 30]}
          onRowsPerPageChange={(e) => onRowsPerPageChange(+e.target.value)}
          component='div'
          count={totalCount}
          rowsPerPage={pageSize}
          page={currentPage}
          onPageChange={(_, page) => onPageChange(page)}
        />
      )}
    </TableContainer>
  );
}
