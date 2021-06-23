# Object-list auto generating table for Angular 12+

> Note: Don't forget to add `ng add @angular/material and <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> (on index.html)` for icons and `npm i bootstrap` for css classes


## @Input binding
- **header**: TableHeaderModel[]
- **fields**: TableFieldModel[];
- **subfields**: TableFieldModel[];
- **data**: any[];
- **subData**: any[];
- **sorting**: TableSortModel;
- **subSorting:** TableSortModel;
- **filters:** TableFilterModel[];
- **isSelectable:** boolean (Default true);
- **isSelectableOnce:** boolean (Single or multiple selection, default multiple);
- **paginatorMaxItems:** number (numero massimo di valori per pagina, di default nessuno, lista intera)
- **evenRowColor:** string (colore esadecimale righe pari, default nero)
- **oddRowColor:** string (colore esadecimale dispari, default nero chiaro)
- **rowClassesFunctionName:** (row: any)=> string (Funzione richiamata su ogni riga che mi ritorna la classe);
  es: tableRowClassesFunction(row: BaseStockPickingDetail): string {
  return row instanceof StockPickingDetail ? '' : 'green-row';
  }

## @Output binding
- **eventOnFIeld:** String (Stringa emessa ad ogni click su una determinata colonna, corrispondente all’eventName definito in Field)

- **changeRowSelected:** any (se il campo è selectable viene passato l’oggetto che è stato selezionato);

## TableFieldModel

## -------------------------------

## Project commands

### Build

Run `ng build object-list` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build object-list`, go to the dist folder `cd dist/object-list` and run `npm publish`.

